// Select all the project items
const projectItems = document.querySelectorAll('.col-lg-6');

// Create the IntersectionObserver to track when items are visible
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class
      observer.unobserve(entry.target); // Stop observing once it's animated
    }
  });
}, {
  threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each project item
projectItems.forEach(item => {
  observer.observe(item);
});
