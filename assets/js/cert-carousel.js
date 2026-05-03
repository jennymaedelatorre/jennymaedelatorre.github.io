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