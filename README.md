# Titanbotics website

A small, responsive website made with plain HTML, CSS, and JavaScript. No build step, frameworks, remote fonts, tracking, or package installation.

## Preview

Open `index.html` in your browser. All navigation works directly from files. Optionally run `python3 -m http.server 8000` in this directory and visit http://localhost:8000.

## Publish on GitHub Pages

1. Create a repository such as `titanbotics-website`.
2. Upload the contents of this folder to the repository root, including `.nojekyll`.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select **main** and **/ (root)**, and save.
5. GitHub will show the published Pages URL after deployment.

All local links are relative, so the site works under a project URL such as `https://USERNAME.github.io/titanbotics-website/` as well as at a domain root.

**Leave the custom domain field empty.** No CNAME is included and no changes to titanbotics.org DNS are needed for this version. This package has not been pushed or published.

## Edit the site

- `index.html`: Home
- `team.html`: Team
- `seasons.html`: Season overview
- `seasons/bioglow.html`: 2026–27 BIOGLOW
- `seasons/unearthed.html`: 2025–26 UNEARTHED achievements
- `robot.html`: Our Robot
- `css/style.css`: shared colors, typography, spacing, and mobile layout
- `js/main.js`: optional robot-page accordion enhancement
- `images/`: original SVG mascot and favicon

Each page contains its own header/footer so it is easy for students to read and edit, works without JavaScript, and needs no templating. Apply navigation or footer edits consistently to all six pages. Preserve this exact footer credit: “Designed by ChatGPT along with Titanbotics”.

## Content notes

Sources reviewed September 20, 2026:
- https://sites.google.com/view/titanbotics/home
- https://sites.google.com/view/titanbotics/fll-journey
- Referenced FLL Simulator Options conversation and the current user brief.

Verified source content: participating schools; first-place Core Values award among 24 teams; invitation to Regionals. The existing site disagrees on the qualifier date (November 15 versus November 21), so no exact date is published here. Regional attendance/results are not asserted. BIOGLOW naming and year follow the user brief; no scores, awards, theme details, or project outcomes are invented for that season. Team roster and grades were omitted because they may have changed. The robot is an original illustrative mascot, not a depiction of the actual robot. Add approved team/robot photographs and confirmed season updates when available.

The cached conversation did not expose the final visual mockup; this design interprets the requested minimalist, Apple-inspired, kid-friendly direction.

## Kids-first content direction

Revised for readers around ages 10–14, with clear explanations for parents and judges. The first-person copy is draft website copy, not attributed quotes from individual children. Have the team review it in their own words. The robot notebook uses the curved-path question in the supplied conversation; no successful outcome or measurements are invented.

Useful next additions: approved team and actual robot photos; kids’ own descriptions of their contributions; innovation-project problem and solution; test measurements; dated design changes; feedback and what changed because of it. No fictional names, quotes, photos, scores, videos, or project evidence are included.
