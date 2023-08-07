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
    <div>
      <img src="../src/data/warning-2.svg" alt="" />
      هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
      محاسبه و به این مبلغ اضافه خواهد شد.
    </div>
  </div>
  <div class="cart-box__price--all">
    <p>مبلغ قابل پرداخت</p>
    <span class="price-unit">${totalPrice}</span>
  </div>
    `;
  }
}

export default Payment;
