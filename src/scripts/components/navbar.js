import { Storage } from "../storage.js";

const profileMenu = document.querySelector(".profile__menu");
const profileDownCaret = document.querySelector(".arrow-down-profile");
const hamburgerMenu = document.querySelector(".header__hamburger");
const headerItem = document.querySelector(".header__links");
const modalBackground = document.querySelector(".modal-background");
const closePanel = document.querySelector(".close-panel");
const navbarCart = document.querySelector(".cta--cart");
const searchButton = document.querySelector(".cta--search");
const closeSearch = document.querySelector(".close--serach--panel--mark");
const searchModal = document.querySelector(".search-modal");
const parentOfUL = document.querySelector(
  ".place__dropdown.profile__menu .place__dropdown__UL"
);
const openLoginModal = parentOfUL.firstElementChild.firstElementChild;

// variables

class NavbarComponent {
  constructor() {
    profileDownCaret.addEventListener("click", () => {
      profileMenu.classList.toggle("active");
    });
    // the side menu
    hamburgerMenu.addEventListener("click", () => {
      headerItem.classList.add("active");
    });

    modalBackground.addEventListener("click", () => {
      headerItem.classList.remove("active");
    });

    closePanel.addEventListener("click", () => {
      headerItem.classList.remove("active");
    });
    // search bar
    searchButton.addEventListener("click", () => {
      headerItem.classList.add("active-search");
    });
    closeSearch.addEventListener("click", () => {
      headerItem.classList.remove("active-search");
    });
    searchModal.addEventListener("click", () => {
      headerItem.classList.remove("active-search");
    });
  }

  loadCart() {
    let inCartAmount = Storage.loadCart().length;
    const cartLink = `<a href="../public/cart.html" class="cart-link" >`;
    const cartImage = `<img src="../src/data/shopping-cart.svg" alt="new" />`;
    const cartSpan = `
    <span class="cart--amount">${inCartAmount}</span>
    `;
    navbarCart.innerHTML = cartLink + cartImage + cartSpan + `</a>`;
  }

  checkLogin() {
    JSON.parse(localStorage.getItem("loginToken"))
      ? (openLoginModal.innerText = "پنل کاربری")
      : (openLoginModal.innerText = "ورود/ثبت نام");
  }
}

export default NavbarComponent;
