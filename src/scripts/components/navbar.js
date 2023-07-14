const profileMenu = document.querySelector(".profile__menu");
const profileDownCaret = document.querySelector(".arrow-down-profile");
const hamburgerMenu = document.querySelector(".header__hamburger");
const headerItem = document.querySelector(".header__links");
const modalBackground = document.querySelector(".modal-background");
const closePanel = document.querySelector(".close-panel");
const navbarCart = document.querySelector(".cta--cart");
// variables
let inCartAmount = 0;

class NavbarComponent {
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
