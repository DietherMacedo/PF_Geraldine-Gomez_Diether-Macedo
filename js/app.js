const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const submitBtn = document.querySelector(".submit-btn");

const navIconFunc = () => {
  if (navBtn.innerHTML.includes("fa-bars")) {
    navLinks.classList.add("show-links");
    navBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else {
    navLinks.classList.remove("show-links");
    navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
};

navBtn.addEventListener("click", () => {
  navIconFunc();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
