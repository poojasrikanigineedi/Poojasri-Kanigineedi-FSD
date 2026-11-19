/* ------------------------------------------------------------------
   Portfolio content. Edit this file to update the site; no other file
   needs to change for text, links, projects or certificates.

   - Leave a url as "" and the link simply isn't shown.
   - To add a project screenshot, drop the image in assets/projects/
     and set `shot` to its path, e.g. "assets/projects/doubtwave.png".
   - To add a photo, put it in assets/ and set profile.photo.
------------------------------------------------------------------- */
window.PORTFOLIO = {
  profile: {
    name: "Poojasri Kanigineedi",
    first: "Poojasri",
    last: "Kanigineedi",
    role: "Computer Science student and aspiring software developer",
    location: "Guntur, Andhra Pradesh, India",
    email: "poojasrikanigineedi@gmail.com",
    phone: "9848797506",
    linkedin: "https://linkedin.com/in/poojasri-kanigineedi-920b9337a",
    github: "https://github.com/poojasrikanigineedi",
    resume: "assets/Poojasri_Kanigineedi_Resume.docx",
    photo: "", // e.g. "assets/photo.jpg"
    college: "Vasireddy Venkatadri Institute of Technology (VVIT)",
    degree: "B.Tech, Computer Science and Engineering",
    gradYear: 2028,
    cgpa: "9.22"
  },

  intro:
    "I'm a B.Tech student who likes turning a problem into working code. I practise Java and Python, solve programming problems on CodeChef, and build small web projects to learn how real software fits together.",

  about: {
    paragraphs: [
      "I'm studying Computer Science and Engineering at VVIT, with a strong academic record and a steady habit of solving problems. I'm enthusiastic about learning Java and Python and interested in full-stack development.",
      "I'm looking for an internship where I can apply what I know, learn from working engineers, and contribute to real-world software projects."
    ],
    interests: ["Data structures and algorithms", "Artificial intelligence", "Web development"],
    strengths: ["Quick learner in areas of strong interest", "Effective teamwork and communication"]
  },

  skills: [
    { group: "Programming languages", items: [
      { name: "Java" }, { name: "Python", note: "basic" }, { name: "C" }, { name: "SQL" }
    ]},
    { group: "Web technologies", items: [
      { name: "HTML", note: "learning" }, { name: "CSS", note: "learning" }, { name: "JavaScript", note: "learning" }
    ]},
    { group: "Computer science", items: [
      { name: "Data Structures and Algorithms", note: "theoretical", mono: "DS" },
      { name: "Object-Oriented Programming", mono: "OO" },
      { name: "DBMS", mono: "DB" }
    ]},
    { group: "Tools and platforms", items: [
      { name: "VS Code", mono: "VS" }, { name: "GitHub", mono: "GH" },
      { name: "Online videos and websites", note: "how I learn", mono: "Ln" }
    ]},
    { group: "Working style", items: [
      { name: "Problem solving", mono: "Ps" }, { name: "Analytical thinking", mono: "An" },
      { name: "Communication", mono: "Cm" }, { name: "Teamwork", mono: "Tw" }
    ]}
  ],

  projects: [
    {
      title: "DoubtWave",
      subtitle: "Silent Doubt Collection System",
      description:
        "Collaboratively developed a web-based platform using AI tools that enables students to anonymously submit doubts, improving classroom interaction and student participation. Contributed to designing a user-friendly interface for smooth doubt collection and management.",
      tags: ["Web-based platform", "Built with AI tools", "Team project"],
      shot: "assets/projects/doubtwave.png", // replace with a real screenshot any time
      links: [
        { label: "Open live project", url: "https://regal-maamoul-4904d7.netlify.app/" }
        // { label: "Source code", url: "https://github.com/poojasrikanigineedi/<repo>" }
      ]
    },
    {
      title: "W3Schools Website Clone",
      subtitle: "Front-end practice project",
      description:
        "Recreated the layout and design of the W3Schools website using HTML and CSS to strengthen front-end development skills. Focused on replicating the structure, styling, and responsiveness of the original site while practicing clean and organized code.",
      tags: ["HTML", "CSS"],
      shot: "assets/projects/w3schools-clone.png",
      links: [
        // { label: "Source code", url: "https://github.com/poojasrikanigineedi/<repo>" },
        // { label: "Live demo", url: "" }
      ]
    }
  ],

  achievements: [
    {
      id: "aihack",
      tab: "AI Hack, Round 2",
      title: "AI Hack: selected for Round 2",
      big: "Top 40",
      bigLabel: "teams selected",
      points: [
        "Our team was selected among the top 40 teams from numerous participating teams.",
        "Qualified for Round 2 of AI Hack, conducted at Malla Reddy University, Hyderabad."
      ]
    },
    {
      id: "codechef",
      tab: "CodeChef, 1,000 problems",
      title: "CodeChef: 1,000 Problems Solved badge",
      big: "1,000",
      bigLabel: "problems solved",
      points: [
        "Solved 1,000 programming problems on CodeChef and earned the 1,000 Problems Solved badge.",
        "A record of consistency, competitive programming and regular problem-solving practice."
      ]
    },
    {
      id: "nptel",
      tab: "NPTEL, Software Testing",
      title: "NPTEL: Software Testing, Elite certification",
      big: "Top 2%",
      bigLabel: "of 8,371 registered candidates",
      points: [
        "Earned an Elite Certification in Software Testing.",
        "Ranked among the top 2% of 8,371 registered candidates.",
        "Course duration: July to October 2026."
      ]
    }
  ],

  certifications: [
    { issuer: "CodeChef", title: "Java", url: "" },
    { issuer: "CodeChef", title: "JavaScript", url: "" },
    { issuer: "CodeChef", title: "HTML", url: "" }
    // add a certificate link with url: "https://..."
  ],

  codingProfiles: [
    {
      name: "CodeChef",
      highlight: true,
      text: "Practising competitive programming. Earned the 1,000 Problems Solved badge.",
      url: "" // paste your CodeChef profile URL here, e.g. "https://www.codechef.com/users/<username>"
    }
  ],

  education: [
    {
      level: "B.Tech, Computer Science and Engineering",
      school: "Vasireddy Venkatadri Institute of Technology (VVIT)",
      when: "2024 to 2028",
      score: "CGPA 9.22",
      extra: ["Data Structures", "Algorithms", "Object-Oriented Programming", "Web Development"]
    },
    {
      level: "Intermediate (Class XI and XII)",
      school: "Sri Krishnaveni Sahakara Junior College, Vijayawada",
      score: "96.7%"
    },
    {
      level: "Secondary school (Class X)",
      school: "Zilla Parishad High School",
      score: "95.33%"
    }
  ]
};
