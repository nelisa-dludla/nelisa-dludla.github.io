const burgerMenuButton = document.getElementById("burger-menu");
const burgerMenuBg = document.getElementById("burger-menu-background");
const navbar = document.getElementById("navbar");
const body = document.getElementById("layout");
const burgerMenuCloseButton = document.getElementById("close-button");

let isOpen = false;

burgerMenuButton.addEventListener("click", () => {
  if (!isOpen) {
    isOpen = true;
    navbar.style.display = "block";
    burgerMenuBg.style.display = "block";
    body.style.overflowY = "hidden";
  }
});

burgerMenuCloseButton.addEventListener("click", () => {
  if (isOpen) {
    isOpen = false;
    navbar.style.display = "none";
    burgerMenuBg.style.display = "none";
    body.style.overflowY = "visible";
  }
});
