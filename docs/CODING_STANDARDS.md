# Coding standards

## Source ownership

- Edit public content in `pages/`.
- Edit shared navigation, status, and footer markup in `_includes/`.
- Keep production CSS in `styles/style.css` and browser behavior in `scripts/script.js`.
- Add images only under the relevant `assets/images/<domain>/` directory.

## Page contracts

Every page source must define:

- `layout: null`
- one unique, stable `permalink`
- `cursor_label` and `status_label`
- the correct navigation `section` when applicable

Every indexable page must keep one title, one meta description, one canonical URL, and one H1. Structured data must use `https://gndme.github.io/#person` for the gndme identity.

## CSS and JavaScript

- Reuse existing custom properties before introducing a new visual value.
- Keep selectors scoped to a component or page pattern.
- Preserve keyboard focus, reduced-motion behavior, and mobile layout.
- Avoid page-specific scripts when the shared interaction bundle can express the behavior.

## Repository hygiene

- Do not commit generated site output, temporary screenshots, or unused experiments.
- Remove superseded assets and code after confirming that no public page references them.
- Keep public claims factual and avoid absolute metrics that cannot be independently supported.
