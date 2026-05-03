document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");

    const startCounting = (el) => {
        const target = +el.getAttribute("data-count");
        let count = 0;
        const speed = 250;

        const update = () => {
            const increment = Math.ceil(target / speed);
            if (count < target) {
                count += increment;
                el.textContent = (count > target ? target : count) + "+";
                requestAnimationFrame(update);
            } else {
                el.textContent = target + "+";
            }
        };
        update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        
            if (entry.isIntersecting && document.body.classList.contains("loaded")) {
                
                
                setTimeout(() => {
                    startCounting(entry.target);
                }, 200);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); 

    counters.forEach(counter => observer.observe(counter));
});