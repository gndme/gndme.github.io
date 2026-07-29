# Contributing Guidelines & Conventional Commits

Thank you for reviewing or contributing to the `gndme` flagship repository.

---

## 🔀 Branching Strategy

To maintain strict main branch stability:
* `main`: Production live branch deployed to GitHub Pages edge.
* `feature/*`: New feature or case profile development (e.g., `feature/design-system`, `feature/case-study-ttd`).
* `fix/*` or `hotfix/*`: Bug fixes and patch releases.

---

## 📝 Conventional Commit Messages

All commit messages in this repository follow the [Conventional Commits specification](https://www.conventionalcommits.org/):

* `feat(scope)`: A new feature or technical case profile. (e.g., `feat(brands): publish FIXORY Lab profile`)
* `fix(scope)`: A bug fix or patch. (e.g., `fix(nav): resolve active link hover state override`)
* `style(scope)`: Changes that do not affect code logic (white-space, formatting, design tokens).
* `docs(scope)`: Documentation updates. (e.g., `docs(readme): update system architecture diagram`)
* `perf(scope)`: Performance optimizations. (e.g., `perf(assets): compress dashboard webp images`)
* `refactor(scope)`: Code refactoring without behavioral changes.
