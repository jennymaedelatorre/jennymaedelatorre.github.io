        document.addEventListener('DOMContentLoaded', () => {
            // Options for the intersection observer
            const options = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // Trigger when 10% of the element is visible
            };

            // Create an intersection observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            }, options);

            // Target elements to observe
            const elements = document.querySelectorAll('.about, .about-img, .about-content, .tech-stack,.circle-bar, .hob-icon');
            elements.forEach(element => {
                observer.observe(element);
            });
        });