const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-button");

menu.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});