const roles = ["Web Developer", "UI/UX Designer"];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.getElementById("role-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // TYPE
    roleElement.textContent = currentRole.substring(0, charIndex);
    charIndex++;

    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // pause
      return;
    }
  } else {
    // DELETE
    roleElement.textContent = currentRole.substring(0, charIndex);
    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
