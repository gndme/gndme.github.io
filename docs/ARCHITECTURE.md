# System Architecture & Technical Philosophy

This document outlines the architectural principles, system design choices, and engineering philosophy behind the `gndme` platform.

---

## 🏛️ Core Principles

### 1. Workflow-First Architecture
Software should not merely digitize paper forms or Excel cells. Instead, it must redesign raw operational processes into standardized, machine-verified **State Machine Pipelines** (Finite State Machines).

### 2. Closed-Loop Operational Engine
Information must never remain trapped in disconnected silos (e.g., Messenger chats or loose spreadsheets). Every lead, order, stock movement, shift output, and invoice flows through a single closed-loop data pipeline.

### 3. Decoupled Architecture
Public-facing marketing storefronts, B2B corporate portals, internal administration CMS, and industrial telemetry backends operate as decoupled layers:
* **Frontend**: Server-Side Rendered (SSR) / Static Edge Delivery for maximum speed and SEO.
* **Backend**: Asynchronous RESTful & WebSocket APIs powered by Python FastAPI.
* **Database**: Relational consistency with ACID compliance on PostgreSQL.

---

## 🌐 2-Tier Internet Infrastructure

```text
                               ┌───────────────────────────┐
                               │     gndme.github.io       │
                               │  (System Architecture Hub)│
                               └─────────────┬─────────────┘
                                             │
               ┌─────────────────────────────┼─────────────────────────────┐
               ▼                             ▼                             ▼
   ┌───────────────────────┐     ┌───────────────────────┐     ┌───────────────────────┐
   │    fixorylab.vn ↗     │     │     tuctac.net ↗      │     │    tanthanhdung.vn ↗  │
   │  (Repair B2C Portal)  │     │ (3D Figures Storefront)│     │  (Packaging Mfg B2B)  │
   └───────────────────────┘     └───────────────────────┘     └───────────────────────┘
```

---

## ⚡ Source Code Architecture & Single Source of Truth

To balance **Modern Modular Code Organization (`src/`)** with **GitHub Pages Direct Edge Serving (`/`)**, the repository operates on a Single Source of Truth architecture:

1. **`src/` (Single Source of Truth for Development)**:
   - All component design, HTML templates, CSS tokens, and JavaScript modules are developed inside `src/` (`src/app/`, `src/pages/`, `src/styles/`, `src/scripts/`, `src/assets/`).
2. **Root Entry Points (Production Edge Output)**:
   - Root files serve as the live edge production bundle deployed to GitHub Pages CDN without breaking relative link routing or cold-start performance.
3. **Automated Build (`package.json`)**:
   - Running `npm run build` compiles and syncs updates from `src/` to production edge targets.
