import { allFood } from "../../db/allFood.js";

const Menu = {
  iranianFood: document.querySelector(".menu-food.iranian--food .food__menu"),
  foreignFood: document.querySelector(".menu-food.foreign--food .food__menu"),
  pizzaFood: document.querySelector(".menu-food.pizza--food .food__menu"),
  sandwichFood: document.querySelector(".menu-food.sandwich--food .food__menu"),
};

let foodItem = "";

class menuPage {
  constructor() {
    this.uiMenu();
  }
  uiMenu() {
    for (const box in Menu) {
      const foodBox = Menu[box];
      const foodFilter = foodBox.parentElement.classList[2].split("--")[0];
      allFood.map((food) => {
        if (food.type === foodFilter) {
          foodItem += `
          <div class="food__menu__item">
          <div class="food__menu--image">
            <img src=${food.image} alt=${food.name} />
          </div>
          <div class="food__menu--etc">
            <div class="food__menu--name">
              <h5>${food.name}</h5>
              <p class="food-box__price--discount ${
                food.discount === 0 && "no-discount"
              }">
                <span class="last-price">${food.price}</span>
                <span class="discount-badge">${food.discount}%</span>
              </p>
            </div>
            <div class="food__menu__details">
              <p class="food-menu--recipe">
                پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده
              </p>
              <div class="food__menu--price">
                <p class="food-box__price--discount ${
                  food.discount === 0 && "no-discount"
                }">
                <span class="last-price">${food.price}</span>
                <span class="discount-badge">${food.discount}%</span>
                </p>
                <p class="food-box__price--price">${food.offPrice}</p>
              </div>
            </div>
            <div class="food__menu__cta">
              <div class="food__menu--favorite only-phone" data-id="${food.id}">
                <img src="../src/data/heart.svg" alt="" />
              </div>
              <div class="food__menu__star">
                <img src="../src/data/Star rate.svg" alt="" />
                <img src="../src/data/Star rate.svg" alt="" />
                <img src="../src/data/Star rate.svg" alt="" />
                <img src="../src/data/Star rate.svg" alt="" />
                <img src="../src/data/Star rate.svg" alt="" />
              </div>
              <button class="link-btn">افزودن به سبد خرید</button>
            </div>
          </div>
          </div>
        `;
        }
      });
      
      foodBox.innerHTML = foodItem;
      foodItem = "";
    }
  }
}

export default menuPage;
