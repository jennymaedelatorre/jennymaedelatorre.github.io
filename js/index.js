document.addEventListener('DOMContentLoaded', () => {
    // Add the loaded class to body after everything is fully loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100); // Small delay to ensure that the content has started rendering
});
