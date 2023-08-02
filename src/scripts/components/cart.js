import { Storage } from "../storage.js";
import NavbarComponent from "./navbar.js";

class Cart {
  constructor() {
    this.showCart();
  }

  showCart() {
    if (window.location.pathname.includes("/public/cart.html")) {
      const CartBox = document.querySelector(".cart-box");
      const CartList = Storage.loadCart();
      let cartString = "";
      if (Storage.loadCart().length) {
        if (!Storage.loadCart()) {
        } else {
          cartString += `<div class="cart-box__list">`;
          CartList.map((item) => {
            cartString += `
              <div class="cart-box__item">
              <div class="cart-box__item--image">
                <img src=${item.image} alt="" />
              </div>
              <div class="cart-box__item--info cart-in-phone">
                <p>${item.name}</p>
                <span>${item.offPrice}</span>
              </div>
              <div class="cart-box__item--amount cart-in-phone">
                <span class="cart--plus" data-id=${item.id} >+</span>
                <span class="cart--item-amount">${item.quantity}</span>
                <span class="cart--trash cart--mines" data-id=${item.id}>
                  <img src="../src/data/trash-green.svg" alt="trash green" />
                </span>
              </div>
              <div class="cart-box--pc--info">
                <p class="cart-box--pc--info__name">${item.name}</p>
                <p class="cart-box--pc--info__recipe">
                  پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده
                </p>
                <div class="cart-box--pc--info__rate">
                  <div class="cart-box--pc__star">
                    <img src="../src/data/Star rate.svg" alt="" />
                    <img src="../src/data/Star rate.svg" alt="" />
                    <img src="../src/data/Star rate.svg" alt="" />
                    <img src="../src/data/Star rate.svg" alt="" />
                    <img src="../src/data/Star rate.svg" alt="" />
                  </div>
                  <div class="cart-box__item--amount">
                    <span class="cart--plus" data-id=${item.id}>+</span>
                    <span class="cart--item-amount">${item.quantity}</span>
                    <span class="cart--trash cart--mines" data-id=${item.id}> - </span>
                  </div>
                </div>
              </div>
              <div class="cart-box--pc--action">
                <img class="cart--item-remove" src="../src/data/trash.svg" alt="trash" data-id=${item.id}/>
                <div class="cart-box--pc__price">
                  <div class="cart-box--pc__price--discount">
                    <span class="last-price">${item.price}</span>
                    <span class="discount-badge">${item.discount}%</span>
                  </div>
                  <div class="cart-box--pc__price--final price-unit">${item.offPrice}</div>
                </div>
              </div>
            </div>
              `;
          });
          cartString += `</div>`;

          let totalOff = 0;
          let totalPrice = 0;
          CartList.map((item) => {
            totalOff +=
              (parseInt(item.price) - parseInt(item.offPrice)) * item.quantity;
            totalPrice += parseInt(item.price) * item.quantity;
          });

          cartString += `
          <div class="cart-box__price">
          <div class="cart-box__amount only-desktop">
            <div>
              <span class="cart-name" style="font-size: 1.6rem">سبد خرید</span>
              <span class="cart-count" style="font-size: 1.4rem">(${CartList.length})</span>
            </div>
            <div class="all-cart-remove">
              <img style="width: 24px" src="../src/data/trash.svg" alt="" />
            </div>
          </div>
          <div class="cart-box__price--discout">
            <p>تخفیف محصولات</p>
            <span class="price-unit">
                  ${totalOff}
            </span>
          </div>
          <div class="cart-box__price--post">
            <div>
              <p>هزینه ارسال</p>
              <span class="price-unit">۰</span>
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
          <button class="cta--complete-data link-btn">
            <img src="../src/data/arrow-left.svg" alt="" />
            تکمیل اطلاعات
          </button>
        </div> 
          `;

          CartBox.innerHTML = cartString;
        }

        // add and cost quantity
        const addQuantity = document.querySelectorAll(".cart--plus");
        const minesQuantity = document.querySelectorAll(".cart--mines");

        addQuantity.forEach((addBtn) => {
          addBtn.addEventListener("click", () => {
            const id = addBtn.dataset.id;
            const index = Storage.loadCart().findIndex(
              (item) => item.id === parseInt(id)
            );
            const allCartData = [...Storage.loadCart()];
            const updatedItem = { ...allCartData[index] };
            updatedItem.quantity++;
            allCartData[index] = updatedItem;
            Storage.addToCart(allCartData);
            console.log("updatedItem", allCartData);
            this.showCart();
          });
        });

        minesQuantity.forEach((mineBtn) => {
          mineBtn.addEventListener("click", () => {
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
            this.showCart();
          });
        });

        // cart item remover

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
            this.showCart();
          });
        });

        // remove all cart details

        const allCartRemover = document.querySelector(".all-cart-remove");
        allCartRemover.addEventListener("click", () => {
          Storage.addToCart([]);
          new NavbarComponent().loadCart();
          this.showCart();
        });
      } else {
        CartBox.classList.add("cart-empty");

        cartString = "";
        cartString += `
        <div class="cart-empty--alert">
          <p class="cart-empty-text">
            شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
          </p>
          <a href="../public/foods.html" class="link-btn">منوی رستوران</a>
        </div>
        `;

        CartBox.innerHTML = cartString;
      }
    }
  }
}

export default Cart;
