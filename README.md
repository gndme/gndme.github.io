# gndme // System Architecture & Brand Engineering Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-lime.svg)](LICENSE)
[![Status: Active Development](https://img.shields.io/badge/Status-Active_Development-00E5FF.svg)](https://gndme.github.io)
[![Version: v0.5.0](https://img.shields.io/badge/Version-v0.5.0-D4FF00.svg)](CHANGELOG.md)

---

## Overview

**`gndme.github.io`** is the public engineering portfolio of **gndme** (Lợi Mai Công Trung).

It documents system architecture, technical case studies, engineering decisions, and digital products built across multiple tech brands and enterprise projects.

---

## Architecture

The ecosystem operates on a **2-Tier Internet Infrastructure**:
* **Tier 1 (Architecture Hub)**: `gndme.github.io` — Public technical case profiles, design tokens, and enterprise case studies served via GitHub Pages Edge CDN.
* **Tier 2 (Production Domains)**: Live operational platforms (`https://fixorylab.vn`, `https://tuctac.net`, `https://tanthanhdung.vn`).

---

## Project Structure

```text
gndme.github.io/
├── .github/              # Issue/PR Templates & Repository Governance
├── docs/                 # Architectural Specifications (Architecture, Design System, UI QA, Roadmap)
├── content/              # Structured JSON/MD Datasets (brands, case-studies)
├── assets/               # High-Resolution Visual Assets & Logos (brands, case-studies, ui)
├── styles/               # Design System CSS Engine (style.css)
├── scripts/              # Standalone JavaScript Engine (script.js)
├── brands/               # Brand Technical Profiles (fixory-lab, tuctac-studio, arsvix)
├── case-studies/         # Enterprise Case Studies (tan-thanh-dung, tt25)
├── index.html            # Personal Identity & Architecture Hub
├── brands.html           # Brands Founded Hub
├── case-studies.html     # Enterprise Case Studies Hub
├── journal.html          # Architect Essays & Notes Hub
├── about.html            # Profile & Technical Stack
├── design-system.html    # Design System & UI/UX QA Hub
├── .nojekyll             # Bypass Jekyll Static Delivery Directive
├── sitemap.xml           # Structured XML Sitemap
├── robots.txt            # Search Engine Directives
├── CHANGELOG.md          # Honest Versioning History (v0.1.0 -> v0.5.0)
├── SECURITY.md           # Security Policy & Directives
└── LICENSE               # MIT License 2026
```

---

## Development Workflow

Our engineering process enforces a strict **Documentation-First** philosophy:

```text
Documentation First ──► Architecture ──► Implementation ──► QA Protocol ──► Release
```

1. **Documentation First**: Define project scope, requirements, and specifications before writing code.
2. **Architecture**: Design state machines, data schemas, and API contracts.
3. **Implementation**: Build using strict Design System tokens (8px grid spacing, HSL color scale).
4. **QA Protocol**: Verify layout, typography, component states, and accessibility across all viewports.
5. **Release**: Issue semantically versioned releases logged in `CHANGELOG.md`.

---

## Roadmap

### Near Term
- [x] Establish flagship repository structure & documentation.
- [x] Complete Design System & UI/UX QA Hub (`design-system.html`).
- [x] Publish FIXORY Lab, TUCTAC Studio, and Arsvix brand profiles.
- [x] Publish Tan Thanh Dung Plastic multi-project case study & TT25 Consulting case study.
- [ ] Finalize custom domain mapping (`gndme.ai` / `gndme.tech`).

### Mid Term
- [ ] Refactor static HTML engine into Next.js App Router with TypeScript.
- [ ] Deploy MDX-based engine for System Architecture Essays.
- [ ] Integrate automated Playwright Visual Regression CI/CD pipeline on GitHub Actions.

### Long Term
- [ ] Develop AI-assisted Architecture Explorer (`gndme Copilot`).

---

Distributed under the [MIT License](LICENSE). Copyright © 2026 gndme.
