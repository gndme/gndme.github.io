# gndme // System Architecture & Brand Engineering Hub

[![License: MIT](https://img.shields.io/badge/License-MIT-lime.svg)](LICENSE)
[![Status: Pre-Release Active Dev](https://img.shields.io/badge/Status-Pre--Release_Active_Dev-00E5FF.svg)](https://gndme.github.io)
[![Version: v0.6.0](https://img.shields.io/badge/Version-v0.6.0-D4FF00.svg)](CHANGELOG.md)

---

## 1. Overview

**`gndme.github.io`** is the public engineering portfolio of **gndme** (Lợi Mai Công Trung).

It documents system architecture, technical case studies, engineering decisions, and digital products built across multiple tech brands and enterprise projects.

---

## 2. Architecture

The ecosystem operates on a **2-Tier Internet Infrastructure**:
* **Tier 1 (Architecture Hub)**: `gndme.github.io` — Public technical case profiles, design tokens, and enterprise case studies served via GitHub Pages Edge CDN.
* **Tier 2 (Production Domains)**: Live operational platforms (`https://fixorylab.vn`, `https://tuctac.net`, `https://tanthanhdung.vn`, `https://tt25.vn`).

---

## 3. Project Structure

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
├── CHANGELOG.md          # Honest Versioning History (v0.1.0 -> v0.6.0)
├── SECURITY.md           # Security Policy & Directives
└── LICENSE               # MIT License 2026
```

---

## 4. Development Workflow

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

## 5. Roadmap & Release Progress

### Version Milestone Tracker
- [x] **v0.1.0**: Repository initialized & setup
- [x] **v0.2.0**: Mission Control Homepage
- [x] **v0.3.0**: Brands Hub & Technical Profiles (`fixory-lab`, `tuctac-studio`, `arsvix`)
- [x] **v0.4.0**: Enterprise Case Studies Hub (`tan-thanh-dung`, `tt25`)
- [x] **v0.5.0**: Journal Engine (`journal.html`)
- [x] **v0.6.0**: Design System & UI/UX QA Hub (`design-system.html`)
- [ ] **v0.7.0**: Full Responsive Audit & Lighthouse Performance Optimizations
- [ ] 🏁 **v1.0.0**: First Public Stable Release (Custom Domain & Official Launch)

---

Distributed under the [MIT License](LICENSE). Copyright © 2026 gndme.
