# gndme Engineering Roadmap

This document outlines the product evolution and architectural milestones for the `gndme` flagship platform.

---

## 🎯 Release Milestones

### Version 3.9.0 (Current Live Release)
- [x] Establish Flagship Repository Structure (`.github/`, `docs/`, `SECURITY.md`, `LICENSE`).
- [x] Establish 10-Phase UI/UX QA Pipeline & Design System Hub (`design.html`).
- [x] Implement Unified Project Facts Card Standard (`Q4 2025 – Q1 2026`).
- [x] Publish Multi-Project Enterprise Case Study Architecture for Tan Thanh Dung Plastic.
- [x] Interlink 2-Tier Internet Infrastructure with live production domains (`fixorylab.vn`, `tuctac.net`, `tanthanhdung.vn`).

---

### Version 4.0.0 (Target Next.js Modular Refactor - Q3 2026)
Migrating the static engine into a modular `src/` Next.js App Router architecture:

```text
gndme.github.io/
├── .github/                 # Workflows & Templates
├── docs/                    # Architectural Documentation
├── public/                  # Static Assets & Screenshots
├── src/
│   ├── app/                 # Next.js App Router Pages & Routing
│   ├── components/          # Reusable UI Components (Cards, Badges, Modals)
│   ├── layouts/             # Root & Section Layout Wrappers
│   ├── sections/            # Hero, Case Study & Architecture Sections
│   ├── pages/               # Page Components
│   ├── styles/              # Global CSS & Design Tokens
│   ├── lib/                 # State Machine & Utility Functions
│   ├── data/                # Project & Brand JSON Datasets
│   └── assets/              # WebP Images & Vector Graphics
│
├── README.md
├── CHANGELOG.md
├── package.json
└── SECURITY.md
```

- [ ] Migrate static HTML engine to Next.js App Router + TypeScript (`src/app/`).
- [ ] Deploy custom MDX blog engine for System Architecture Essays.
- [ ] Integrate automated Playwright Visual Regression CI/CD pipeline on GitHub Actions.

---

### Version 5.0.0 (Q4 2026)
- [ ] Launch Interactive AI Architecture Assistant (`gndme Copilot`).
- [ ] Expand Edge AI Telemetry modules for Arsvix Vision OS.
