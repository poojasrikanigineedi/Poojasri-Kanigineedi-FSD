# Poojasri Kanigineedi, portfolio

A static site: no build step, no dependencies.

## Edit your content
Everything lives in `js/data.js`: profile, skills, projects, achievements, certificates, coding profiles, education.

- **Coding profile URLs**: set `url` for CodeChef, LeetCode and InterviewBit. Until then the card shows "Profile link coming soon".
- **Certificate links**: add `url` to any item in `certifications`.
- **Project screenshots**: put images in `assets/projects/` and set `shot`, e.g. `"assets/projects/doubtwave.png"`.
- **Project links**: uncomment or add entries in a project's `links` list (GitHub repo, live demo).
- **Photo**: put it in `assets/` and set `profile.photo`.
- **Resume**: replace `assets/Poojasri_Kanigineedi_Resume.docx` (keep the file name, or update `profile.resume`). A PDF is better for recruiters; if you switch, update `profile.resume`.

## Preview locally
    npx serve .

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. On vercel.com choose Add New, then Project, import the repository, and press Deploy. No build settings are needed (Framework: Other).

Or from this folder: `npx vercel --prod`.
