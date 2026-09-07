/**
 * GNDME Application Orchestrator
 * High-performance standalone script for interactive cursor, navigation & micro-animations.
 */
document.addEventListener('DOMContentLoaded', function() {
    // 1. Custom Cursor & Hover States
    const cursor = document.getElementById('cursor');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (cursor && finePointer) {
        document.body.classList.add('has-custom-cursor');

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const interactiveSelector = 'a[href], button:not([disabled]), input, select, textarea, summary, [role="button"], [tabindex]:not([tabindex="-1"])';
        let targetX = -100;
        let targetY = -100;
        let currentX = -100;
        let currentY = -100;
        let animationFrame = 0;
        let hasMoved = false;

        function renderCursor() {
            const easing = reducedMotion ? 1 : 0.24;
            currentX += (targetX - currentX) * easing;
            currentY += (targetY - currentY) * easing;
            cursor.style.transform = 'translate3d(' + currentX + 'px, ' + currentY + 'px, 0) translate(-50%, -50%)';

            if (!reducedMotion && (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1)) {
                animationFrame = window.requestAnimationFrame(renderCursor);
            } else {
                animationFrame = 0;
            }
        }

        function queueCursorRender() {
            if (!animationFrame) animationFrame = window.requestAnimationFrame(renderCursor);
        }

        document.addEventListener('pointermove', function(e) {
            targetX = e.clientX;
            targetY = e.clientY;
            hasMoved = true;
            cursor.classList.add('is-visible');
            queueCursorRender();
        }, { passive: true });

        document.addEventListener('pointerover', function(e) {
            cursor.classList.toggle('hovering', Boolean(e.target.closest(interactiveSelector)));
        });

        document.addEventListener('pointerdown', function() {
            cursor.classList.add('is-pressed');
        });

        document.addEventListener('pointerup', function() {
            cursor.classList.remove('is-pressed');
        });

        document.addEventListener('pointercancel', function() {
            cursor.classList.remove('is-pressed');
        });

        document.documentElement.addEventListener('mouseleave', function() {
            cursor.classList.remove('is-visible', 'hovering', 'is-pressed');
        });

        document.documentElement.addEventListener('mouseenter', function() {
            if (hasMoved) cursor.classList.add('is-visible');
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

    // 4. Journal topic filtering
    const journalFilters = document.querySelectorAll('.journal-filter');
    const journalEntries = document.querySelectorAll('.journal-entry');
    journalFilters.forEach(function(filterButton) {
        filterButton.addEventListener('click', function() {
            const selectedFilter = filterButton.dataset.filter;

            journalFilters.forEach(function(button) {
                const isSelected = button === filterButton;
                button.classList.toggle('is-active', isSelected);
                button.setAttribute('aria-pressed', String(isSelected));
            });

            journalEntries.forEach(function(entry) {
                const tags = (entry.dataset.tags || '').split(' ');
                entry.hidden = selectedFilter !== 'all' && !tags.includes(selectedFilter);
            });
        });
    });
});
