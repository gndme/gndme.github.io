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

## ⚡ Why Static Edge Delivery for the Architecture Hub?

1. **Zero Cold Starts**: Served globally via GitHub Pages CDN edge nodes with sub-20ms latency.
2. **Maximum Reliability**: Zero server crashes or database downtime for the personal identity hub.
3. **High Security**: Immutable static files eliminate server-side injection attack vectors.
4. **AI & Crawler Friendly**: Pure HTML5 semantic structure allowing Googlebot and LLM agents to parse technical specs instantly.
