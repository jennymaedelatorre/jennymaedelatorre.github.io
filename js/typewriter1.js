document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('typewriter1');
    const phrases = ["Mobile Developer", "Web Developer", "Cyber Security"];
    let phraseIndex = 0;
    let charIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;

    function type() {
        if (isDeleting) {
            // Delete characters
            currentPhrase = phrases[phraseIndex].substring(0, charIndex);
            charIndex--;
            element.textContent = currentPhrase;

            if (charIndex < 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; 
                setTimeout(type, 500); 
                return;
            }
        } else {
            // Add characters
            currentPhrase = phrases[phraseIndex].substring(0, charIndex + 1);
            element.textContent = currentPhrase;

            if (charIndex === phrases[phraseIndex].length - 1) {
                isDeleting = true;
                setTimeout(type, 3000); 
                return;
            }
            charIndex++;
        }

        setTimeout(type, isDeleting ? 100 : 150); 
    }

    type(); 
});