const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("nav");

menu.onclick = () => {
  menu.classList.toggle("ri-arrow-up-wide-fill");
  navbar.classList.toggle("open");
};
