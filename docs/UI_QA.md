# 10-Phase UI/UX QA Testing Suite Specification

Before merging any Pull Request or releasing code changes to production (`main` branch), the implementation must pass all 10 phases of this QA checklist.

---

## 📋 The 10 QA Phases

### Phase 1 — Visual QA (Viewport Grid Test)
Test layout integrity across 10 strict viewports:
* Mobile: `320px`, `375px`, `390px`, `414px`
* Tablet: `768px`, `1024px`
* Desktop: `1280px`, `1440px`, `1728px`, `1920px`
* Cross-browser check: Chrome, Safari, Edge, Firefox.

### Phase 2 — Layout QA (Alignment & Overflow)
* Zero unwanted horizontal scroll (`overflow-x: hidden`).
* No text clipping, overlapping buttons, or distorted icons.
* Clean flexbox wraps on mobile screens.

### Phase 3 — Typography QA
* Strict adherence to `Archivo Black` & `JetBrains Mono`.
* High contrast ratio meeting WCAG AA/AAA standards.

### Phase 4 — Component States QA
Verify all state transitions: Normal ➔ Hover ➔ Active ➔ Focus Ring ➔ Disabled.

### Phase 5 — UX Navigation Flow
Ensure clear breadcrumbs and zero dead-end navigation paths.

### Phase 6 — Accessibility (a11y)
* Full keyboard navigation support (Tab, Enter, Esc).
* Visible focus indicators for interactive elements.
* Valid `alt` tags on embedded media and images.

### Phase 7 — Performance Benchmarks
* Lighthouse Performance: **95+**
* Lighthouse Accessibility: **100**
* Lighthouse Best Practices: **100**
* Lighthouse SEO: **100**

### Phase 8 — Design System Consistency
Strict usage of CSS custom property tokens (`var(--space-*)`, `var(--accent-lime)`).

### Phase 9 — Screenshot Regression Check
Verify pixel alignment against baseline desktop and mobile screenshots before deployment.

### Phase 10 — Manual Review
Final inspection of dark mode contrast, hero visual impact, and single-handed mobile usability.
