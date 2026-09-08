# gndme — Business Operating Systems & Brand Engineering

Public systems architecture portfolio of **Lợi Mai Công Trung (gndme)**.

[Live site](https://gndme.github.io/) · [Brands](https://gndme.github.io/brands.html) · [Case studies](https://gndme.github.io/case-studies.html) · [Journal](https://gndme.github.io/journal.html)

## Scope

The portfolio documents workflow-first operating systems and technical decisions across repair, niche commerce, manufacturing, and legal-service operations. It also connects the gndme identity with FIXORY Lab, TUCTAC Studio, Arsvix, TÂN THANH DUNG, and TT25 Investment Consulting.

## Repository model

The repository uses GitHub Pages' native Jekyll build instead of committing generated output or adding an unnecessary application framework.

- `pages/` contains public page sources with explicit permalinks.
- `_includes/` contains the shared navigation, status shell, and footer.
- `assets/`, `styles/`, and `scripts/` contain runtime assets.
- `docs/` contains engineering and contribution documentation.
- Public URLs remain stable even though source files are grouped under `pages/`.

```text
gndme.github.io/
├── .github/          # Repository governance
├── _includes/        # Shared site shell
├── assets/           # Images and brand assets
├── docs/             # Engineering documentation
├── pages/            # Public page sources and route content
├── scripts/          # Browser interactions
├── styles/           # Production stylesheet
├── _config.yml       # GitHub Pages / Jekyll configuration
├── robots.txt
├── sitemap.xml
├── README.md
├── SECURITY.md
├── CHANGELOG.md
└── LICENSE
```

## Publishing

Commits to `main` are built and published by GitHub Pages. Every page declares an explicit `permalink`, preventing repository organization changes from altering canonical public URLs.

## Engineering principles

- Model operational states and transitions before CRUD screens.
- Keep entity names, canonical URLs, structured data, and visible copy consistent.
- Reuse the shared shell instead of duplicating navigation and footer markup.
- Keep private operating data out of public case studies.
- Add only assets and source files that are used in production.

Distributed under the [MIT License](LICENSE). Copyright © 2026 gndme.
