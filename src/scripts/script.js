/**
 * ========================================================
 * GNDME SYS.CORE // INTERACTION MODULE v3.0
 * --------------------------------------------------------
 * - Custom cursor tracking (60fps).
 * - Text scramble effect for dynamic command aesthetic.
 * - Uptime counter simulation.
 * ========================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    const cursorLabel = cursor ? cursor.querySelector('.cursor-label') : null;

    if (cursor && cursorLabel) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
        });

        // Interactive hover targets
        const targets = document.querySelectorAll('a, button, .os-card, .metric-card');
        targets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
                const label = el.getAttribute('data-hover-label') || 'EXPLORE';
                cursorLabel.textContent = label;
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
                cursorLabel.textContent = 'IDLE';
            });
        });
    }

    // 2. Text Scramble Effect
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 30);
                const end = start + Math.floor(Math.random() * 30);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span style="color: var(--accent-lime);">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    // Trigger scramble on page load
    const elements = document.querySelectorAll('.scramble-title');
    elements.forEach(el => {
        const fx = new TextScramble(el);
        const targetText = el.getAttribute('data-text') || el.innerText;
        let delay = 0;
        if (el.classList.contains('delay-1')) delay = 300;
        if (el.classList.contains('delay-2')) delay = 600;
        
        setTimeout(() => {
            fx.setText(targetText);
        }, delay);
    });

    // 3. Uptime Counter Simulation
    const uptimeEl = document.getElementById('uptime');
    if (uptimeEl) {
        let simulatedUptime = Math.floor(Math.random() * 500000) + 10000;
        
        function formatTime(totalSeconds) {
            const h = Math.floor(totalSeconds / 3600);
            const m = Math.floor((totalSeconds % 3600) / 60);
            const s = totalSeconds % 60;
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        setInterval(() => {
            simulatedUptime++;
            uptimeEl.textContent = formatTime(simulatedUptime);
        }, 1000);
    }
});
