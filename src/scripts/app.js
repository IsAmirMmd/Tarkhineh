import swiper from "./components/swiper.js";

const profileMenu = document.querySelector(".profile__menu");
const profileDownCaret = document.querySelector(".arrow-down-profile");
const hamburgerMenu = document.querySelector(".header__hamburger");
const headerItem = document.querySelector(".header__links");
const modalBackground = document.querySelector(".modal-background");
const closePanel = document.querySelector(".close-panel");

class app {
  constructor() {
    profileDownCaret.addEventListener("click", () => {
      profileMenu.classList.toggle("active");
    });

    hamburgerMenu.addEventListener("click", () => {
      console.log(hamburgerMenu);
      headerItem.classList.add("active");
    });

    modalBackground.addEventListener("click", () => {
      headerItem.classList.remove("active");
    });

    closePanel.addEventListener("click", () => {
      headerItem.classList.remove("active");
    });
  }
}
export default new app();
