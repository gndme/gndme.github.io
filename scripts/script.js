/**
 * GNDME Application Orchestrator
 * High-performance standalone script for interactive cursor, navigation & micro-animations.
 */
document.addEventListener('DOMContentLoaded', function() {
    // 1. Custom Cursor & Hover States
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.body.classList.add('has-custom-cursor');
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        const interactiveElements = document.querySelectorAll('a, button, .os-card, .live-module-card, input');
        interactiveElements.forEach(function(el) {
            el.addEventListener('mouseenter', function() { cursor.classList.add('hovering'); });
            el.addEventListener('mouseleave', function() { cursor.classList.remove('hovering'); });
        });
    }

    // 2. Active Page Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });

    // 3. Status Bar Scroll Border Transition
    const sysStatus = document.querySelector('.sys-status');
    if (sysStatus) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                sysStatus.style.borderColor = 'var(--border-active)';
            } else {
                sysStatus.style.borderColor = 'var(--border-subtle)';
            }
        });
    }
});
