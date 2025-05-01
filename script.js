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



/* Add this JavaScript to your file  home*/
document.addEventListener('DOMContentLoaded', function() {
    // Get all stat columns
    const statCols = document.querySelectorAll('.col');
    const ratingSection = document.querySelector('.rating');
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-stats';
    closeBtn.innerHTML = '×';
    ratingSection.appendChild(closeBtn);

    // Click handler for stats
    statCols.forEach(col => {
        col.addEventListener('click', function() {
            ratingSection.classList.add('active');
        });
    });

    // Close handler
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        ratingSection.classList.remove('active');
    });

    // Close when clicking outside stats
    ratingSection.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});
