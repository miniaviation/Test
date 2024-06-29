// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Include navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarPlaceholder.innerHTML = data;
            });
    }

    // Smooth scroll for navigation links
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.navbar .links a');
        if (target && !target.getAttribute('href').includes('.html')) {
            e.preventDefault();
            const targetId = target.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Toggle dropdown and arrow direction
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.commands-list .dropdown-indicator');
        if (target) {
            const info = target.closest('p').nextElementSibling;
            if (info.classList.contains('command-info')) {
                info.classList.toggle('open');
                target.classList.toggle('open');
            }
        }
    });
});
