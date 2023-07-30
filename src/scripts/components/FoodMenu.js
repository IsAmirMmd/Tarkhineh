import { allFood } from "../../db/allFood.js";

const Menu = {
  iranianFood: document.querySelector(".menu-food.iranian--food .food__menu"),
  foreignFood: document.querySelector(".menu-food.foreign--food .food__menu"),
  pizzaFood: document.querySelector(".menu-food.pizza--food .food__menu"),
  sandwichFood: document.querySelector(".menu-food.sandwich--food .food__menu"),
};

class menuPage {
  constructor() {
    this.uiMenu();
  }
  uiMenu() {
    for (const box in Menu) {
      const foodBox = Menu[box];
      const foodFilter = foodBox.parentElement.classList[2].split("--")[0];
      console.log(foodFilter, foodBox);
    }
  }
}

export default menuPage;
