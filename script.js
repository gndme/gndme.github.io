/**
 * Main Application Orchestrator
 * Imports and initializes all UI modules.
 */
import { initCursor } from './scripts/cursor.js';
import { initNavigation } from './scripts/navigation.js';
import { initScroll } from './scripts/scroll.js';

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initNavigation();
    initScroll();
});
