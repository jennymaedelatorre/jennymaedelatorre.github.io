document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('typewriter');
    const phrases = ["Mobile Developer", "Web Developer", "Graphic Designer"];
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
                phraseIndex = (phraseIndex + 1) % phrases.length; // Move to the next phrase
                setTimeout(type, 500); // Wait 3 seconds before starting to add characters
                return;
            }
        } else {
            // Add characters
            currentPhrase = phrases[phraseIndex].substring(0, charIndex + 1);
            element.textContent = currentPhrase;

            if (charIndex === phrases[phraseIndex].length - 1) {
                isDeleting = true;
                setTimeout(type, 3000); // Wait 3 seconds before starting to delete characters
                return;
            }
            charIndex++;
        }

        setTimeout(type, isDeleting ? 100 : 150); // Adjust typing speed
    }

    type(); // Start typing effect
});
