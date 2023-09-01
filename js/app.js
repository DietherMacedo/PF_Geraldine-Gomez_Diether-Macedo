const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});
