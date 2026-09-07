/**
 * Custom Cursor Module
 * Controls interactive crosshair cursor & hover states.
 */
export function initCursor() {
    const cursor = document.getElementById('cursor');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!cursor || !finePointer) return;

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
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

        if (!reducedMotion && (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1)) {
            animationFrame = window.requestAnimationFrame(renderCursor);
        } else {
            animationFrame = 0;
        }
    }

    function queueCursorRender() {
        if (!animationFrame) animationFrame = window.requestAnimationFrame(renderCursor);
    }

    document.addEventListener('pointermove', (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        hasMoved = true;
        cursor.classList.add('is-visible');
        queueCursorRender();
    }, { passive: true });

    document.addEventListener('pointerover', (event) => {
        cursor.classList.toggle('hovering', Boolean(event.target.closest(interactiveSelector)));
    });

    document.addEventListener('pointerdown', () => cursor.classList.add('is-pressed'));
    document.addEventListener('pointerup', () => cursor.classList.remove('is-pressed'));
    document.addEventListener('pointercancel', () => cursor.classList.remove('is-pressed'));
    document.documentElement.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-visible', 'hovering', 'is-pressed');
    });
    document.documentElement.addEventListener('mouseenter', () => {
        if (hasMoved) cursor.classList.add('is-visible');
    });
}
