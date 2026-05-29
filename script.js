/**
 * GNDME SYS.CORE // INTERACTION MODULE
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Remove loading class after a brief delay
    setTimeout(() => {
        document.body.classList.remove('loading');
        initScramble();
    }, 500);

    // 2. Custom Cursor Logic
    const cursor = document.getElementById('cursor');
    const cursorLabel = cursor.querySelector('.cursor-label');

    document.addEventListener('mousemove', (e) => {
        // Use requestAnimationFrame for smooth cursor tracking
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    });

    // Handle hover states on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .module-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
            
            // Check if element has a specific hover label
            const hoverLabel = el.getAttribute('data-hover-label');
            if (hoverLabel) {
                cursorLabel.textContent = hoverLabel;
            } else {
                cursorLabel.textContent = 'EXECUTE';
            }
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            cursorLabel.textContent = 'IDLE';
        });
    });

    // 3. Text Scramble Effect
    // A matrix/cyberpunk style text decoder effect
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
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
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
                    output += `<span class="dud">${char}</span>`;
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

    function initScramble() {
        const elements = document.querySelectorAll('.scramble-text, .scramble-title');
        elements.forEach(el => {
            const fx = new TextScramble(el);
            const targetText = el.getAttribute('data-text') || el.innerText;
            
            // Add staggering delay based on classes
            let delay = 0;
            if (el.classList.contains('delay-1')) delay = 400;
            if (el.classList.contains('delay-2')) delay = 800;
            
            setTimeout(() => {
                fx.setText(targetText);
            }, delay);
        });
    }

    // Run scramble on scroll for ecosystem modules
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const textEl = entry.target.querySelector('.scramble-text');
                if (textEl && !textEl.classList.contains('scrambled')) {
                    const fx = new TextScramble(textEl);
                    fx.setText(textEl.getAttribute('data-text'));
                    textEl.classList.add('scrambled');
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-header').forEach(header => {
        observer.observe(header);
    });

    // 4. Uptime Counter Simulation
    const uptimeEl = document.getElementById('uptime');
    let seconds = 0;
    
    // Simulate a random starting uptime so it looks authentic
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

});
