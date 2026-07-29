/**
 * Scroll & Micro-Animations Module
 * Handles scroll-triggered status bar & micro-interactions.
 */
export function initScroll() {
    const sysStatus = document.querySelector('.sys-status');
    if (!sysStatus) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            sysStatus.style.borderColor = 'var(--border-active)';
        } else {
            sysStatus.style.borderColor = 'var(--border-subtle)';
        }
    });
}
