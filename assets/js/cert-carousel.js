document.addEventListener("DOMContentLoaded", function() {
    const myCarouselElement = document.querySelector('#certCarousel');
    
    if (!myCarouselElement) return; 

    const isDesktop = window.innerWidth >= 768;

    if (isDesktop) {
        // WEB/DESKTOP
        const desktopCarousel = new bootstrap.Carousel(myCarouselElement, {
            interval: 3000,
            pause: 'hover'
        });
        desktopCarousel.cycle(); 
    } else {
        // MOBILE
        new bootstrap.Carousel(myCarouselElement, {
            interval: false, 
            ride: false     
        });
    }
});


function viewCert(imgSrc, title) {
    const modalEl = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImg');
    const certTitle = document.getElementById('certTitle');

    if (modalImg && certTitle && modalEl) {
        modalImg.src = imgSrc;
        certTitle.innerText = title;
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }
}