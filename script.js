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