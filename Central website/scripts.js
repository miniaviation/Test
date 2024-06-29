// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('.navbar .links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').includes('.html')) {
                return;
            }
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle dropdown and arrow direction
    document.querySelectorAll('.commands-list .dropdown-indicator').forEach(indicator => {
        indicator.addEventListener('click', function() {
            const info = this.closest('p').nextElementSibling;
            if (info.classList.contains('command-info')) {
                info.classList.toggle('open');
                this.classList.toggle('open');
            }
        });
    });
});

