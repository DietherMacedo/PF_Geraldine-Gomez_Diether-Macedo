const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

console.log(navBtn);
console.log(navLinks);

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});
