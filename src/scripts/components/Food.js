import { allFood } from "../../db/allFood.js";
import { Storage } from "../storage.js";
import NavbarComponent from "./navbar.js";

const allBar = document.querySelector(".all__bar .food__menu");
const popularBar = document.querySelector(".popular__bar .food__menu");
const foreignBar = document.querySelector(".forein__food .food__menu");
const FoodStorage = allFood;

let allFoods = "";
let popFoods = "";
let forFoods = "";

class Food {
  constructor() {
    this.allFood();
    this.popularFood();
    this.foreignFood();
  }

  popularFood() {
    popFoods = "";

    FoodStorage.map((food) => {
      popFoods += `<div class="suggestion__bar--food">`;
      popFoods += `
          <div class="food-image">
            <img src=${food.image} />
          </div>
          `;
      popFoods += `<div class="food-name">${food.name}</div>`;
      food.discount === 0 && console.log(food.name);
      popFoods += `
      <div class="food-box">
        <div class="food-box__fav">
            <div class="food-box__fav--heart" data-id=${food.id}>
            <i class="fa fa-heart" /></i>
            <span> افزودن به علاقمندی‌ها </span>
        </div>
        <div class="food-box__fav--star">
           <img src="../src/data/Star rate.svg" />${
             food.description[3].star
           }<span>(۲۰ امتیاز)</span>
        </div>
    </div>
    <div class="food-box__price">
      <p class="food-box__price--discount ${
        food.discount === 0 && "no-discount"
      }">
        <span class="last-price">${food.price}</span>
        <span class="discount-badge">${food.discount}%</span>
      </p>
      <p class="food-box__price--price">${food.offPrice}</p>
    </div>
    </div>
    `;
      popFoods += `
        <div class="food-btn">
            <a href="./food/${food.id}" class="add-to-cart link-btn" data-id="${food.id}">
            افزودن به سبد خرید
            </a>
        </div>`;
      popFoods += `</div>`;
    });

    // after loading data
    this.loadPopFood();

    // Add event listeners for the heart icons after loading the data
    const heartIcons = document.querySelectorAll(
      ".popular__bar .food-box__fav--heart"
    );
    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener("click", () => {
        const foodId = heartIcon.getAttribute("data-id");
        const heartImage = heartIcon.querySelector("i");

        heartImage.classList.toggle("heart-red");
      });
    });
  }

  foreignFood() {
    forFoods = "";

    FoodStorage.map((food) => {
      forFoods += `<div class="suggestion__bar--food">`;
      forFoods += `
          <div class="food-image">
            <img src=${food.image} />
          </div>
          `;
      forFoods += `<div class="food-name">${food.name}</div>`;
      food.discount === 0 && console.log(food.name);
      forFoods += `
      <div class="food-box">
        <div class="food-box__fav">
            <div class="food-box__fav--heart">
            <i class="fa fa-heart" /></i>
            <span> افزودن به علاقمندی‌ها </span>
        </div>
        <div class="food-box__fav--star">
           <img src="../src/data/Star rate.svg" />${
             food.description[3].star
           }<span>(۲۰ امتیاز)</span>
        </div>
    </div>
    <div class="food-box__price">
      <p class="food-box__price--discount ${
        food.discount === 0 && "no-discount"
      }">
        <span class="last-price">${food.price}</span>
        <span class="discount-badge">${food.discount}%</span>
      </p>
      <p class="food-box__price--price">${food.offPrice}</p>
    </div>
    </div>
    `;
      forFoods += `
        <div class="food-btn">
            <a href="./food/${food.id}" class="add-to-cart link-btn" data-id="${food.id}">
            افزودن به سبد خرید
            </a>
        </div>`;
      forFoods += `</div>`;
    });

    // after loading data
    this.loadForeignFood();

    // Add event listeners for the heart icons after loading the data
    const heartIcons = document.querySelectorAll(
      ".forein__food .food-box__fav--heart"
    );
    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener("click", () => {
        const foodId = heartIcon.getAttribute("data-id");
        const heartImage = heartIcon.querySelector("i");

        heartImage.classList.toggle("heart-red");
      });
    });
  }

  allFood() {
    allFoods = "";

    FoodStorage.map((food) => {
      allFoods += `<div class="suggestion__bar--food">`;
      allFoods += `
          <div class="food-image">
            <img src=${food.image} />
          </div>
          `;
      allFoods += `<div class="food-name">${food.name}</div>`;
      allFoods += `
      <div class="food-box">
        <div class="food-box__fav">
            <div class="food-box__fav--heart">
                <i class="fa fa-heart" /></i>
            <span> افزودن به علاقمندی‌ها </span>
        </div>
        <div class="food-box__fav--star">
           <img src="../src/data/Star rate.svg" />${
             food.description[3].star
           }<span>(۲۰ امتیاز)</span>
        </div>
    </div>
    <div class="food-box__price">
      <p class="food-box__price--discount ${
        food.discount === 0 && "no-discount"
      }">
        <span class="last-price">${food.price}</span>
        <span class="discount-badge">${food.discount}%</span>
      </p>
      <p class="food-box__price--price">${food.offPrice}</p>
    </div>
    </div>
    `;
      allFoods += `
        <div class="food-btn">
            <a href="./food/${food.id}" class="add-to-cart link-btn" data-id="${food.id}">
            افزودن به سبد خرید
            </a>
        </div>`;
      allFoods += `</div>`;
    });

    // after loading data
    this.loadAllFood();

    // Add event listeners for the heart icons after loading the data
    const heartIcons = document.querySelectorAll(
      ".all__bar .food-box__fav--heart"
    );
    heartIcons.forEach((heartIcon) => {
      heartIcon.addEventListener("click", () => {
        const foodId = heartIcon.getAttribute("data-id");
        const heartImage = heartIcon.querySelector("i");

        heartImage.classList.toggle("heart-red");
      });
    });

    // ------ cheking cart ------
    this.checkCart();
  }

  loadAllFood() {
    allBar.innerHTML = allFoods;
  }

  loadPopFood() {
    popularBar.innerHTML = popFoods;
  }

  loadForeignFood() {
    foreignBar.innerHTML = forFoods;
  }

  checkCart() {
    const addToCart = document.querySelectorAll(".add-to-cart.link-btn");

    const allCart = Storage.loadCart();
    const convertedCart = [...allCart];

    addToCart.forEach((element) => {
      const id = parseInt(element.dataset.id);
      let IsInCart = convertedCart.find((p) => p.id == id);
      if (IsInCart) {
        element.innerText = "اضافه شده";
      }
      element.addEventListener("click", (e) => {
        e.preventDefault();
        if (Storage.loadCart().find((cart) => cart.id === id)) {
          const updated = Storage.loadCart().filter((cart) => cart.id !== id);
          Storage.addToCart(updated);
          element.innerText = "افزودن به سبد خرید";
        } else {
          element.innerText = "اضافه شده";
          allCart.push({
            ...FoodStorage.find((c) => c.id === id),
            quantity: 1,
          });
          Storage.addToCart(allCart);
        }
        new NavbarComponent().loadCart();
      });
    });
  }
}

export default Food;
