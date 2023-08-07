import { Storage } from "../storage.js";

class Payment {
  showCartItem() {
    const cartBoxList = document.querySelector(".cart-box__list");
    Storage.loadCart().map((item) => {
      const cartItem = document.createElement("div");
      cartBoxList.appendChild(cartItem);
      cartItem.classList.add("cart-box__item");

      cartItem.innerHTML = `
        <div class="cart-box__item--info" data-id="${item.id}">
            <p>${item.name}</p>
            <span>${item.offPrice}</span>
        </div>
        <div class="cart-box__item--amount">
            <span class="cart--plus" data-id="${item.id}">+</span>
            <span class="cart--item-amount">${item.quantity}</span>
            <span class="cart--trash cart--mines" data-id="${item.id}">
            <img src="../src/data/trash-green.svg" alt="trash green" />
            </span>
        </div>
        `;
    });
  }
}

export default Payment;
