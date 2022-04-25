const navMenu = document.querySelector(".nav-menu");
const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");

function showMenu() {
  navMenu.style.display = "flex";
  closeBtn.style.display = "block";
}

function closeMenu() {
  navMenu.style.display = "none";
  closeBtn.style.display = "none";
}

openBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", closeMenu);
