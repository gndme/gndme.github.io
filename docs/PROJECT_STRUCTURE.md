# Project structure

The repository separates route source, shared presentation, runtime assets, and documentation while keeping the deployed URL structure unchanged.

## Directories

- `.github/` — CODEOWNERS and contribution templates.
- `_includes/` — shared cursor, status bar, navigation, footer, and runtime script reference.
- `assets/` — production images grouped by brand and case study.
- `docs/` — architecture, coding, contribution, roadmap, and QA notes.
- `pages/` — Jekyll page sources. Each file declares its public `permalink`.
- `scripts/` — the production browser interaction bundle.
- `styles/` — the production design-system stylesheet.

## Public routes

Hub pages retain their existing `.html` URLs. Detail pages retain directory-style URLs:

- `/about.html`
- `/brands.html`
- `/brands/<brand>/`
- `/case-studies.html`
- `/case-studies/<case-study>/`
- `/journal.html`
- `/journal/<article>/`

Do not move generated Jekyll output into the repository. GitHub Pages builds the published tree from `main`.
