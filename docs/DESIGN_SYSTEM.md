# GNDME Design System Specification (v3.9.0)

This specification defines the visual tokens, layout grid, typography scale, and component guidelines for `gndme.github.io`.

---

## 🎨 Color Palette Tokens

```css
:root {
    /* Base Surfaces */
    --bg-main: #050505;          /* Deepest Background */
    --surface-100: #0a0a0a;      /* Primary Component Surface */
    --surface-200: #141414;      /* Sub-Card & Code Block Surface */
    
    /* Text Hierarchy */
    --text-white: #FFFFFF;        /* Headings & High-contrast Text */
    --text-high: #CFCFCF;         /* Primary Body Reading Text */
    --text-mid: #7D7D7D;          /* Secondary Metadata & Sub-captions */
    --text-dark: #444444;         /* Dividers & Inactive Elements */
    
    /* Brand & State Accents */
    --accent-lime: #D4FF00;       /* Primary Brand Accent (Lime Glow) */
    --accent-cyan: #00E5FF;       /* Technical & Telemetry Accent */
    --accent-orange: #FF9900;     /* Manufacturing & Execution Accent */
    --accent-red: #FF453A;        /* Error & Challenge Warning Accent */

    /* Borders */
    --border-subtle: rgba(255, 255, 255, 0.08);
    --border-active: rgba(212, 255, 0, 0.35);
}
```

---

## 📐 Spacing Scale (Strict 8px System)

```css
--space-8: 8px;
--space-12: 12px;
--space-16: 16px;
--space-20: 20px;
--space-24: 24px;
--space-32: 32px;
--space-48: 48px;
--space-64: 64px;
--space-96: 96px;
--space-120: 120px;
```

---

## 🔤 Typography Scale

* **Headings Font**: `'Archivo Black', sans-serif;` (Uppercase, tight letter-spacing)
* **Monospace Font**: `'JetBrains Mono', monospace;` (Technical body & code blocks)

| Element | Size Range | Weight / Line-Height |
| ------- | ---------- | -------------------- |
| Hero Massive Title | `clamp(3.5rem, 8vw, 7rem)` | 900 / `0.95` |
| H1 Page Title | `clamp(2.8rem, 5.5vw, 5.2rem)` | 900 / `1.05` |
| H2 Section Title | `2.0rem` | 900 / `1.2` |
| H3 Card Heading | `1.4rem` | 900 / `1.3` |
| Body Text High | `1.1rem` | 400 / `1.8` |
| Mono Metadata | `0.75rem - 0.85rem` | 400 - 700 / `1.5` |
