# Security Policy

## Supported Versions

The following table lists the security support status for `gndme.github.io` repository releases:

| Version | Supported          |
| ------- | ------------------ |
| 3.9.x   | :white_check_mark: |
| 3.x.x   | :white_check_mark: |
| < 3.0.0 | :x:                |

---

## Reporting a Vulnerability

If you discover a potential security vulnerability within this repository or any connected production domains (`fixorylab.vn`, `tuctac.net`, `tanthanhdung.vn`), please follow these guidelines:

1. **Email Security Report**: Send an encrypted report to **congtrung9910@gmail.com**.
2. **Details to Include**:
   - Description of the vulnerability or security header misconfiguration.
   - Steps to reproduce the issue.
   - Proof of Concept (PoC) code if applicable.
3. **Response SLA**: Acknowledgment will be sent within **24 hours**, with a patch or remediation plan issued within **72 hours**.

---

## Security Engineering Directives

The `gndme` platform enforces strict security policies across static delivery and API layers:

* **HTTP Strict Transport Security (HSTS)**: Enforced via HTTPS redirect.
* **Content Security Policy (CSP)**: Restrictions on inline scripts and external origins.
* **Payload Encryption**: Sensitive enterprise payloads encrypted via `AES-256-GCM`.
* **Zero Secret Leakage**: API credentials and secrets strictly isolated in private repositories and environment variables.
