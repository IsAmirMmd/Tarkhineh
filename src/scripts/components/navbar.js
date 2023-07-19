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

// variables
let inCartAmount = 0;

class NavbarComponent {
  constructor() {
    profileDownCaret.addEventListener("click", () => {
      profileMenu.classList.toggle("active");
    });
    // the side menu
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
    const cartImage = `<img src="../src/data/shopping-cart.svg" alt="new" />`;
    const cartSpan = `
    <span class="cart--amount">${inCartAmount}</span>
    `;
    console.log(cartImage);
    navbarCart.innerHTML = cartImage + cartSpan;
  }
}

export default NavbarComponent;