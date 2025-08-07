import '@/css/main.css';
import 'flowbite';
import htmx from 'htmx.org';
import Alpine from 'alpinejs';

import { sayHello } from './important.js';

// Make HTMX and Alpine globally accessible
window.htmx = htmx;
window.Alpine = Alpine;

// Start Alpine.js
Alpine.start();

console.log('Hello from Vite');
sayHello("Starship Combat Tracker");
