# gndme // System Architecture & Brand Engineering Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-lime.svg)](LICENSE)
[![Status: Production](https://img.shields.io/badge/Status-Production-00E5FF.svg)](https://gndme.github.io)
[![Lighthouse: 95+](https://img.shields.io/badge/Lighthouse-95%2B-27C93F.svg)](docs/UI_QA.md)

---

## 1. Overview

**`gndme.github.io`** is the Flagship System Architecture & Brand Engineering Hub for **Lợi Mai Công Trung** ([gndme](https://github.com/gndme)), Founder of CW Group. It documents the technical specifications, operating system architectures, and enterprise case studies for owned tech brands and client transformations.

---

## 2. Architecture

The ecosystem operates on a **2-Tier Internet Infrastructure**:
* **Tier 1 (Architecture Hub)**: `gndme.github.io` — Serves static engineering profiles, design tokens, and multi-project case studies globally via GitHub Pages Edge CDN.
* **Tier 2 (Production Domains)**: Live operational platforms (`https://fixorylab.vn`, `https://tuctac.net`, `https://tanthanhdung.vn`).

---

## 3. Project Structure

```text
gndme.github.io/
├── .github/              # Issue/PR Templates & Repository Governance
├── docs/                 # Architectural & Engineering Specifications
├── content/              # Structured JSON/MD Datasets (brands, case-studies)
├── assets/               # High-Resolution Visual Assets & Logos
├── styles/               # Modular CSS Engine (reset, tokens, layout, components, pages, utilities)
├── scripts/              # Modular JavaScript Engine (cursor, navigation, scroll)
├── projects/             # Brands Technical Profiles & Case Studies
├── index.html            # Personal Identity & Architecture Hub
├── brands.html           # Brands Founded Hub (FIXORY, TUCTAC, Arsvix)
├── case-studies.html     # Enterprise Case Studies Hub (Tan Thanh Dung, TT25)
├── journal.html          # Architect Essays & Notes Hub
├── about.html            # Profile & Technical Stack
├── design-system.html    # Interactive Design System & UI/UX QA Hub
├── script.js             # ES Module Application Entry Point
├── sitemap.xml           # Structured XML Sitemap
├── robots.txt            # Search Engine Directives
├── CHANGELOG.md          # Versioning History
├── SECURITY.md           # Security Policy & Directives
└── LICENSE               # MIT License 2026
```

---

## 4. Development Workflow

1. **Design & Tokens**: All visual elements conform to `styles/tokens.css` (8px grid spacing, HSL color scale).
2. **Quality Assurance**: Every modification must pass the [10-Phase UI/UX QA Protocol](docs/UI_QA.md).
3. **Commit Standards**: Strictly follow [Conventional Commits](docs/CONTRIBUTING.md) (`feat`, `fix`, `docs`, `style`, `refactor`).

---

## 5. Roadmap

* **v3.9 (Current)**: Modular CSS/JS architecture, 2-tier infrastructure, 10-Phase QA Pipeline & Design System Hub.
* **v4.0 (Q3 2026)**: Next.js App Router refactor & MDX architecture essays engine.
* **v5.0 (Q4 2026)**: Interactive AI Architecture Assistant (`gndme Copilot`).

---

Distributed under the [MIT License](LICENSE). Copyright © 2026 gndme.
