document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active', 'btn-light'));
            filterButtons.forEach(btn => btn.classList.add('btn-outline-light'));
            
            button.classList.add('active', 'btn-light');
            button.classList.remove('btn-outline-light');

            const filterValue = button.getAttribute('data-filter');

            // 2. Filter projects
            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');

                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.style.display = 'block';
                    item.classList.add('aos-animate');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('aos-animate');
                }
            });

            // 3. Refresh AOS to recalculate positions
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });
});