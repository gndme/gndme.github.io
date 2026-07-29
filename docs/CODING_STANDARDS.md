# Coding Standards & Guidelines

This document outlines the code conventions, formatting rules, and naming standards enforced across `gndme.github.io`.

---

## 🎨 CSS Standards

1. **Design Tokens First**: Always use custom properties defined in `styles/tokens.css` (e.g., `var(--space-24)`, `var(--accent-lime)`). Never hardcode magic pixel values like `padding: 17px;`.
2. **Modular Organization**:
   - `styles/reset.css`: Global resets.
   - `styles/tokens.css`: Color, font, spacing & radius variables.
   - `styles/layout.css`: Containers, navbar & grid layouts.
   - `styles/components.css`: Card, cursor, badge & UI element styles.
   - `styles/pages.css`: Hero section & page-specific layouts.
   - `styles/utilities.css`: Atomic utility helper classes.

---

## ⚡ JavaScript Standards

1. **ES Module Architecture**: Use native ES module `import` / `export` syntax.
2. **Modular Single Responsibility**: Keep functions small and contained within dedicated modules (`scripts/cursor.js`, `scripts/navigation.js`, `scripts/scroll.js`).
3. **No Global Pollution**: Keep variables scoped inside module functions.

---

## 📄 HTML Standards

1. **Semantic HTML5**: Use proper semantic tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
2. **Accessibility (a11y)**: Every interactive button and image link must have accessible labels or `alt` text.
