document.addEventListener("DOMContentLoaded", () => {
  const typingCmd = document.getElementById("typing-cmd");
  const preloader = document.getElementById("preloader");

  const fullCommand = "npm run start-portfolio";
  let i = 0;

  function type() {
    if (typingCmd && i < fullCommand.length) {
      typingCmd.innerHTML += fullCommand.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  }

  setTimeout(type, 300);

  function hidePreloader() {
    if (!preloader) return;

    preloader.classList.add("preloader-hidden");

   
    document.body.classList.add("loaded");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }

  window.addEventListener("load", () => {
    setTimeout(hidePreloader, 3000); 
  });
});