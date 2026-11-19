(function () {
  "use strict";
  var D = window.PORTFOLIO;
  if (!D) {
    var m = document.getElementById("main");
    if (m) m.insertAdjacentHTML("afterbegin", '<p class="noscript">Portfolio content failed to load. Please refresh the page.</p>');
    return;
  }
  var P = D.profile;
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var ICON = {
    mail: '<path d="M3 6h18v12H3z"/><path d="m3 7 9 7 9-7"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.800 7 11 7 11z"/><circle cx="12" cy="10" r="2.500"/>',
    github: '<path d="M9 19c-4 1.500-4-2-6-2m12 4v-3.500a3 3 0 0 0-.8-2.300c2.800-.3 5.800-1.400 5.800-6.200a4.800 4.800 0 0 0-1.300-3.300 4.500 4.500 0 0 0-.1-3.300s-1.100-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.500 4.500 0 0 0-.1 3.300A4.800 4.800 0 0 0 4 9.700c0 4.800 3 5.900 5.800 6.200A3 3 0 0 0 9 18.200V21"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',
    out: '<path d="M7 17 17 7M8 7h9v9"/>',
    down: '<path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/>',
    check: '<path d="m5 12 5 5 9-10"/>'
  };
  function icon(n) {
    return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round">' + ICON[n] + "</svg>";
  }
  function link(url, label, cls, ico) {
    return '<a class="' + cls + '" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + esc(label) + (ico ? icon(ico) : "") + "</a>";
  }

  /* ---------- hero ---------- */
  $("heroRole").textContent = P.role;
  $("heroName").innerHTML = '<span>' + esc(P.first) + '</span> <span>' + esc(P.last) + "</span>";
  $("heroIntro").textContent = D.intro;
  $("heroResume").innerHTML = icon("down") + "Download resume";
  $("heroResume").href = P.resume;
  $("navResume").href = P.resume;

  /* at a glance panel */
  var facts = [
    ["Studying", P.degree.split(",")[0] + " in CSE at VVIT"],
    ["Class of", String(P.gradYear)],
    ["CGPA", P.cgpa],
    ["Based in", P.location.split(",").slice(0, 2).join(",")],
    ["Looking for", "Software development internship"]
  ];
  $("glance").innerHTML = "<h2>At a glance</h2><dl>" + facts.map(function (f) {
    return "<div><dt>" + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>";
  }).join("") + "</dl>";

  /* ---------- about ---------- */
  var A = D.about;
  $("aboutText").innerHTML = (P.photo ? '<img class="photo" src="' + esc(P.photo) + '" alt="Portrait of ' + esc(P.name) + '" onerror="this.remove()">' : "") +
    A.paragraphs.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
  $("aboutSide").innerHTML =
    "<h3>Interested in</h3><ul>" + A.interests.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
    "<h3>Strengths</h3><ul>" + A.strengths.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";

  /* ---------- skills ---------- */
  $("skillsList").innerHTML = D.skills.map(function (g) {
    return '<div class="skill-row"><h3>' + esc(g.group) + '</h3><ul>' + g.items.map(function (s) {
      var mono = s.mono || s.name.slice(0, s.name.length > 2 ? (s.name === "JavaScript" ? 2 : 1) : 2);
      if (s.name === "JavaScript") mono = "JS";
      if (s.name === "Java") mono = "Jv";
      if (s.name === "Python") mono = "Py";
      if (s.name === "HTML") mono = "H5";
      if (s.name === "CSS") mono = "C3";
      if (s.name === "SQL") mono = "Sq";
      if (s.name === "C") mono = "C";
      return '<li class="chip"><span class="chip-mono" aria-hidden="true">' + esc(mono) + '</span><span class="chip-name">' + esc(s.name) + "</span>" + (s.note ? '<span class="chip-note">' + esc(s.note) + "</span>" : "") + "</li>";
    }).join("") + "</ul></div>";
  }).join("");

  /* ---------- projects ---------- */
  $("projectsList").innerHTML = D.projects.map(function (p, i) {
    var shot = p.shot
      ? '<img src="' + esc(p.shot) + '" alt="Screenshot of ' + esc(p.title) + '" loading="lazy" onerror="this.parentNode.classList.add(\'is-empty\');this.remove()">'
      : "";
    var empty = p.shot ? "" : " is-empty";
    return '<article class="project' + (i % 2 ? " flip" : "") + '">' +
      '<div class="frame' + empty + '"><div class="frame-bar" aria-hidden="true"><i></i><i></i><i></i></div><div class="frame-body">' + shot +
      '<p class="frame-empty">Screenshot of ' + esc(p.title) + " goes here</p></div></div>" +
      '<div class="project-body"><h3>' + esc(p.title) + '</h3><p class="project-sub">' + esc(p.subtitle) + "</p>" +
      "<p>" + esc(p.description) + "</p>" +
      '<ul class="tags">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      (p.links && p.links.length ? '<div class="project-links">' + p.links.filter(function (l) { return l.url; }).map(function (l, k) {
        return link(l.url, l.label, k === 0 ? "btn btn-primary" : "btn btn-ghost", "out");
      }).join("") + "</div>" : "") +
      "</div></article>";
  }).join("");

  /* ---------- achievements (tabs) ---------- */
  (function () {
    var box = $("achBox"), items = D.achievements;
    var tabs = '<div class="tablist" role="tablist" aria-label="Achievements">' + items.map(function (a, i) {
      return '<button role="tab" id="tab-' + a.id + '" aria-controls="panel-' + a.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + esc(a.tab) + "</button>";
    }).join("") + "</div>";
    var panels = items.map(function (a, i) {
      var badge = a.id === "codechef"
        ? '<svg class="medal" viewBox="0 0 120 120" aria-hidden="true"><polygon points="60,6 106,32 106,88 60,114 14,88 14,32" fill="#E3A82B"/><polygon points="60,16 97,37 97,83 60,104 23,83 23,37" fill="none" stroke="#121A33" stroke-width="2"/><text x="60" y="66" text-anchor="middle" font-family="Bricolage Grotesque, sans-serif" font-weight="800" font-size="28" fill="#121A33">1000</text><text x="60" y="84" text-anchor="middle" font-family="Figtree, sans-serif" font-weight="600" font-size="10" fill="#121A33">solved</text></svg>'
        : "";
      return '<div role="tabpanel" id="panel-' + a.id + '" aria-labelledby="tab-' + a.id + '" tabindex="0"' + (i ? " hidden" : "") + ">" +
        '<div class="ach-big">' + (badge || "") + '<p class="ach-num">' + esc(a.big) + '</p><p class="ach-numlabel">' + esc(a.bigLabel) + "</p></div>" +
        '<div class="ach-text"><h3>' + esc(a.title) + "</h3><ul>" + a.points.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul></div></div>";
    }).join("");
    box.innerHTML = tabs + '<div class="panels">' + panels + "</div>";

    var btns = box.querySelectorAll('[role="tab"]');
    function select(n, focus) {
      btns.forEach(function (b, i) {
        var on = i === n;
        b.setAttribute("aria-selected", on);
        b.tabIndex = on ? 0 : -1;
        box.querySelector("#panel-" + items[i].id).hidden = !on;
      });
      if (focus) btns[n].focus();
    }
    btns.forEach(function (b, i) {
      b.addEventListener("click", function () { select(i); });
      b.addEventListener("keydown", function (e) {
        var k = e.key, n = i;
        if (k === "ArrowDown" || k === "ArrowRight") n = (i + 1) % btns.length;
        else if (k === "ArrowUp" || k === "ArrowLeft") n = (i - 1 + btns.length) % btns.length;
        else if (k === "Home") n = 0;
        else if (k === "End") n = btns.length - 1;
        else return;
        e.preventDefault();
        select(n, true);
      });
    });
  })();

  /* ---------- certifications ---------- */
  $("certList").innerHTML = D.certifications.map(function (c) {
    return '<article class="cert"><div class="cert-in">' +
      '<span class="seal" aria-hidden="true">' + icon("check") + "</span>" +
      '<p class="cert-issuer">' + esc(c.issuer) + '</p><h4>' + esc(c.title) + '</h4><p class="cert-kind">Certification</p>' +
      (c.url ? link(c.url, "View certificate", "cert-link", "out") : "") +
      "</div></article>";
  }).join("");

  /* ---------- coding profiles ---------- */
  $("profList").innerHTML = D.codingProfiles.map(function (c) {
    return '<li class="profile' + (c.highlight ? " is-main" : "") + '"><div><h3>' + esc(c.name) + "</h3><p>" + esc(c.text) + "</p></div>" +
      (c.url ? link(c.url, "Open " + c.name + " profile", "btn btn-ghost", "out") : '<span class="profile-pending">Profile link coming soon</span>') + "</li>";
  }).join("");

  /* ---------- education ---------- */
  $("eduList").innerHTML = D.education.map(function (e) {
    return '<li class="step"><div class="step-card"><h3>' + esc(e.level) + '</h3><p class="step-school">' + esc(e.school) + "</p>" +
      '<p class="step-meta">' + (e.when ? "<span>" + esc(e.when) + "</span>" : "") + '<span class="score">' + esc(e.score) + "</span></p>" +
      (e.extra ? '<ul class="tags">' + e.extra.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" : "") +
      "</div></li>";
  }).join("");

  /* ---------- contact + footer ---------- */
  var rows = [
    ["mail", "Email", P.email, "mailto:" + P.email],
    ["phone", "Phone", P.phone, "tel:+91" + P.phone.replace(/\D/g, "")],
    ["linkedin", "LinkedIn", "poojasri-kanigineedi", P.linkedin],
    ["github", "GitHub", "poojasrikanigineedi", P.github]
  ];
  $("contactList").innerHTML = rows.map(function (r) {
    var ext = /^https/.test(r[3]) ? ' target="_blank" rel="noopener noreferrer"' : "";
    return '<li><a href="' + esc(r[3]) + '"' + ext + ">" + icon(r[0]) + '<span class="cl-label">' + r[1] + '</span><span class="cl-val">' + esc(r[2]) + "</span></a></li>";
  }).join("") + '<li class="cl-loc">' + icon("pin") + '<span class="cl-label">Based in</span><span class="cl-val">' + esc(P.location) + "</span></li>";

  $("footText").textContent = "© " + new Date().getFullYear() + " " + P.name + ". Built with HTML, CSS and JavaScript.";
  $("footSocial").innerHTML =
    '<li><a href="mailto:' + esc(P.email) + '">' + icon("mail") + '<span>Email</span></a></li>' +
    '<li><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener noreferrer">' + icon("linkedin") + '<span>LinkedIn</span></a></li>' +
    '<li><a href="' + esc(P.github) + '" target="_blank" rel="noopener noreferrer">' + icon("github") + '<span>GitHub</span></a></li>';

  /* contact form: composes an email in the visitor's mail app */
  var form = $("contactForm"), status = $("formStatus");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim(), msg = form.message.value.trim();
    status.className = "form-status";
    if (!name || !msg) {
      status.textContent = "Add your name and a message, then try again.";
      status.className = "form-status is-error";
      (name ? form.message : form.name).focus();
      return;
    }
    var subject = "Hello from " + name;
    window.location.href = "mailto:" + P.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(msg + "\n\n" + name);
    status.textContent = "Your email app should open now. If nothing happens, write to " + P.email + ".";
  });

  /* ---------- navigation ---------- */
  var nav = $("nav"), toggle = $("navToggle"), links = $("navLinks");
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && links.classList.contains("open")) { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.focus(); }
  });
  window.addEventListener("scroll", function () { nav.classList.toggle("is-scrolled", window.scrollY > 8); }, { passive: true });

  var anchors = {};
  links.querySelectorAll('a[href^="#"]').forEach(function (a) { anchors[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) {
          Object.keys(anchors).forEach(function (k) { anchors[k].removeAttribute("aria-current"); });
          if (anchors[en.target.id]) anchors[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(anchors).forEach(function (k) { var s = document.getElementById(k); if (s) io.observe(s); });
  }
})();
