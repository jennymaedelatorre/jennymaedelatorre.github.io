// Get the preloader and content wrapper
const preloader = document.querySelector("#preloader");
const contentWrapper = document.querySelector("#content-wrapper");

if (preloader && contentWrapper) {
    window.addEventListener("load", () => {
        // After 1 second, add the loaded class to fade out preloader
        setTimeout(() => {
            preloader.classList.add("loaded");
        }, 1000);

        // After another second, remove the preloader and show the content
        setTimeout(() => {
            preloader.style.display = "none";  // Hide preloader
            contentWrapper.classList.add("show");  // Show content with fade-in
        }, 2000);
    });
}
