document.addEventListener('DOMContentLoaded', () => {
    // Handle the menu toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Add active class to the current link
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});