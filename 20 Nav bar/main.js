const humburgerMenu = document.querySelector(".humburger");
const mainBody = document.querySelector("body");
const pageLinks = document.querySelector(".page-links")
const socials = document.querySelector(".socials")


humburgerMenu.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("animate");
    pageLinks.classList.toggle("show-links");
    socials.classList.toggle("show-links");
});

