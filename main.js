let openBurger = document.querySelector(".header__open-burger");
let closeBurger = document.querySelector(".header__close-burger");
let mainBurger = document.querySelector(".header__mb-buttons");
let mainDiv = document.querySelector(".header__mb-div");
let navButton = document.querySelector(".header__mb-button");
let links = document.querySelectorAll(".header__mb-links-texts");
let accordionBoxes = document.querySelectorAll(".faq__accardion-boxes");
let accardionTexts = document.querySelectorAll(".faq__accardion-text");
let accardionIcons = document.querySelectorAll(".faq__accardion-top-box-icon");
function closeMenu() {
  mainDiv.classList.remove("active");
  openBurger.style.display = "block";
  closeBurger.style.display = "none";
}
mainBurger.addEventListener("click", () => {
  mainDiv.classList.toggle("active");
  if (mainDiv.classList.contains("active")) {
    openBurger.style.display = "none";
    closeBurger.style.display = "block";
  } else {
    closeMenu();
  }
});
navButton.addEventListener("click", closeMenu);
links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
accordionBoxes.forEach((item, index) => {
  let accardionText = accardionTexts[index];
  let accardionIcon = accardionIcons[index];
  item.addEventListener("click", () => {
    accardionText.classList.toggle("active");
    accardionIcon.classList.toggle("rotate");
  });
});