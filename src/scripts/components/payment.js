import { Storage } from "../storage.js";
import NavbarComponent from "./navbar.js";

const cartBoxList = document.querySelector(".cart-box__list");

class Payment {
  showCartItem() {
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
  calculatePrice() {
    const cartBoxPrice = document.querySelector(".cart-box__price");
    let totalOff = 0;
    let totalPrice = 0;
    Storage.loadCart().map((item) => {
      totalOff +=
        (parseInt(item.price) - parseInt(item.offPrice)) * item.quantity;
      totalPrice += parseInt(item.price) * item.quantity;
    });
    cartBoxPrice.innerHTML = `
    <div class="cart-box__amount only-desktop">
        <div>
        <span class="cart-name" style="font-size: 1.6rem"
            >سبد خرید</span
        >
        <span class="cart-count" style="font-size: 1.4rem"
            >(${Storage.loadCart().length})</span
        >
        </div>
        <div class="all-cart-remove">
            <img style="width: 24px" src="../src/data/trash.svg" alt="" />
        </div>
    </div>
    <div class="cart-box__price--discout">
        <p>تخفیف محصولات</p>
        <span class="price-unit"> ${totalOff} </span>
    </div>
    <div class="cart-box__price--post">
        <div>
            <p>هزینه ارسال</p>
            <span class="price-unit">37000</span>
        </div>
    </div>
    <div class="cart-box__price--all">
        <p>مبلغ قابل پرداخت</p>
        <span class="price-unit">${totalPrice}</span>
    </div>
    `;

    this.quantityHandler();
  }

  quantityHandler() {
    const addQuantity = document.querySelectorAll(".cart--plus");
    const minesQuantity = document.querySelectorAll(".cart--mines");

    addQuantity.forEach((addBtn) => {
      addBtn.addEventListener("click", () => {
        cartBoxList.replaceChildren([]);

        const id = addBtn.dataset.id;
        const index = Storage.loadCart().findIndex(
          (item) => item.id === parseInt(id)
        );
        const allCartData = [...Storage.loadCart()];
        const updatedItem = { ...allCartData[index] };
        updatedItem.quantity++;
        allCartData[index] = updatedItem;
        Storage.addToCart(allCartData);
        this.showCartItem();
        this.calculatePrice();
      });
    });

    minesQuantity.forEach((mineBtn) => {
      mineBtn.addEventListener("click", () => {
        cartBoxList.replaceChildren([]);

        const id = mineBtn.dataset.id;
        const index = Storage.loadCart().findIndex(
          (item) => item.id === parseInt(id)
        );
        const allCartData = [...Storage.loadCart()];
        const updatedItem = { ...allCartData[index] };
        if (updatedItem.quantity === 1) {
          const updatedCartdata = allCartData.filter(
            (item) => item.id !== parseInt(id)
          );
          Storage.addToCart(updatedCartdata);
          new NavbarComponent().loadCart();
        } else {
          updatedItem.quantity--;
          allCartData[index] = updatedItem;
          new NavbarComponent().loadCart();
          Storage.addToCart(allCartData);
        }
        this.showCartItem();
        this.calculatePrice();
      });
    });

    const allCartRemover = document.querySelector(".all-cart-remove");
    allCartRemover.addEventListener("click", () => {
      Storage.addToCart([]);
      new NavbarComponent().loadCart();
      cartBoxList.replaceChildren([]);
      this.showCartItem();
      this.calculatePrice();
    });

    const cartTRemover = document.querySelectorAll(".cart--item-remove");
    cartTRemover.forEach((removeBtn) => {
      removeBtn.addEventListener("click", () => {
        const id = parseInt(removeBtn.dataset.id);
        const allCartData = [...Storage.loadCart()];
        const updatedCartdata = allCartData.filter(
          (item) => item.id !== parseInt(id)
        );
        Storage.addToCart(updatedCartdata);
        new NavbarComponent().loadCart();
        this.showCartItem();
        this.calculatePrice();
      });
    });
  }
}

export default Payment;
