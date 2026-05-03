const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    
    navLinks.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

   
    if (navbarCollapse.classList.contains("show")) {
     
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      bsCollapse.hide();
    }
  });
});