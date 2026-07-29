# Security Policy

## Supported Versions

Security updates are provided for the latest public release (`v0.5.0`).

---

## Reporting a Vulnerability

If you discover a potential security vulnerability within this repository or any related production systems, please report it responsibly via email.

**Contact**: [congtrung9910@gmail.com](mailto:congtrung9910@gmail.com)

**Please include in your report**:
- A clear description of the vulnerability or security misconfiguration
- Steps to reproduce the issue
- Potential impact
- Screenshots, logs, or Proof of Concept (if available)

The maintainer will make reasonable efforts to acknowledge reports promptly and provide updates as remediation progresses.

---

## Security Principles

This repository follows a security-first approach:

- **HTTPS-Only**: Enforced via HTTPS redirects across static edge delivery.
- **Strict Headers**: HTTP Strict Transport Security (HSTS) and Content Security Policy (CSP) directives.
- **Zero Secret Leakage**: Secrets, API credentials, and production configurations are never committed to this public repository.
- **Environment-Based Config**: Production keys and environment variables are strictly isolated in secure server environments.
- **Responsible Disclosure**: Open communication channel for security researchers and community feedback.

Where applicable, the security practices described in this document are also adopted across related production systems (`fixorylab.vn`, `tuctac.net`, `tanthanhdung.vn`).
