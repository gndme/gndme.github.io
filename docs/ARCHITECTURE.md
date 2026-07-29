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

## ⚡ Pure Static Engine Architecture (v3.9.0)

This repository operates as a **Pure Static Engine** delivered globally via GitHub Pages Edge CDN:

1. **Zero Cold Starts & Zero Build Overhead**:
   - 100% native HTML5, CSS custom properties, and JavaScript.
   - Zero runtime Node.js overhead or bundler compilation steps for v3.9.0.
   - Every file serves 1:1 directly to the browser with sub-20ms latency.
2. **Single Source of Truth**:
   - Clean, non-duplicated repository structure where every page exists in exactly one authoritative location.
3. **Future Next.js Migration (`v4.0.0`)**:
   - The modular `src/` directory structure (`src/app/`, `src/components/`, `src/styles/`) will be introduced when officially migrating to Next.js & TypeScript in version 4.0.0.
