document.addEventListener('DOMContentLoaded', () => {
    // Handle the menu toggle
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Update active link on page load
    updateActiveLinkOnScroll();
});

function updateActiveLinkOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('.header').offsetHeight; // Get header height to account for fixed header

    let currentSection = '';

    const scrollPosition = window.scrollY; // Current scroll position

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight; // Adjust section top by header height
        const sectionHeight = section.clientHeight;

        // Adjusted condition to activate the correct section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('scroll', function() {
    updateActiveLinkOnScroll();
});
