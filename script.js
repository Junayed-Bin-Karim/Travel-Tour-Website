const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};




/* JavaScript for Scroll Animation Destination Section */
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.center-text, .box');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
 



// Replace your current JS with this mobile-optimized version
document.addEventListener('DOMContentLoaded', function() {
    // Only essential mobile functionality first
    const menu = document.querySelector('#menu-icon');
    if (menu) {
      menu.addEventListener('click', toggleMobileMenu);
    }
    
    // Load other JS after 1 second
    if (!('ontouchstart' in window)) {
      setTimeout(loadDesktopJS, 1000);
    }
  });
  
  function toggleMobileMenu() {
    // Simplified mobile menu toggle
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
  }
  
  function loadDesktopJS() {
    // Load non-mobile-essential JS
    const script = document.createElement('script');
    script.src = 'js/desktop.js';
    script.async = true;
    document.body.appendChild(script);
  }




  // sw.js - Create this file in your root directory
const CACHE_NAME = 'mobile-cache-v1';
const OFFLINE_URL = 'offline.html';
const ASSETS_TO_CACHE = [
  '/',
  '/style.mobile.css',
  '/js/main.mobile.js',
  '/images/logo.webp',
  '/images/main-mobile.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate' && 
      !event.request.url.includes('/api/')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(OFFLINE_URL))
    );
  } else if (ASSETS_TO_CACHE.some(url => event.request.url.includes(url))) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => response || fetch(event.request))
    );
  }
});