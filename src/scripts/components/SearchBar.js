import { allFood } from "../../db/allFood.js";
import { Storage } from "../storage.js";
import NavbarComponent from "./navbar.js";

const searchBoxPC = document.querySelector("#searchBox");
const buttonPC = document.querySelector(".search-box-img");

const searchBoxMobile = document.querySelector("#search-mobileBox");
const buttonMobile = document.querySelector(".search-mobile-box-img");

class SearchBox {
  onSearch() {}

  doSearch() {
    if (!window.location.pathname.includes("/public/searchPage"))
      if (window.screen.width < 768) {
        console.log(buttonMobile);
        buttonMobile.addEventListener("click", (e) => {
          e.preventDefault();
          if (searchBoxMobile.value === "") {
            alert("لطفا عبارتی وارد کنید!");
            return;
          }
          window.location.href = `../public/searchPage.html?search=${searchBoxMobile.value}`;
        });
      } else {
        buttonPC.addEventListener("click", (e) => {
          e.preventDefault();
          if (searchBoxPC.value === "") {
            alert("لطفا عبارتی وارد کنید!");
            return;
          }
          window.location.href = `../public/searchPage.html?search=${searchBoxPC.value}`;
        });
      }
  }

  searchResult() {
    if (window.location.pathname.includes("/public/searchPage")) {
      document.addEventListener("DOMContentLoaded", () => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchFilter = urlParams.get("search");
        const searchComp = document.querySelector(".search-result");
        let foodResult = "";
        const updatedFilter = allFood.filter((food) =>
          food.name.includes(searchFilter)
        );
        if (updatedFilter.length === 0) {
          searchComp.innerHTML = `
            <h3 class="no-result">موردی با این مشخصات پیدا نکردیم!</h3>
            <span class="no-result__span">${searchFilter}</span>
            <a href="../index.html" class="back-link">بازگشت به صفحه اصلی</a>
            <img class="img-serach-result" src="../src/data/noFood.svg" alt="no result" />
            `;
        } else {
          foodResult += `
            <div class="accept-result">
                <h3>نتایج جستجو برای:</h3>
                <span class="accept-result__span">${searchFilter}</span>
            </div>
            `;
          foodResult += `<div class="food-search-result">`;
          updatedFilter.map((food) => {
            foodResult += `<div class="suggestion__bar--food">`;
            foodResult += `
                    <div class="food-image">
                      <img src=${food.image} />
                    </div>
                    `;
            foodResult += `<div class="food-name">${food.name}</div>`;
            food.discount === 0 && console.log(food.name);
            foodResult += `
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
            foodResult += `
                  <div class="food-btn">
                      <a href="./food/${food.id}" class="add-to-cart link-btn" data-id="${food.id}">
                      افزودن به سبد خرید
                      </a>
                  </div>`;
            foodResult += `</div>`;
          });
          foodResult += `</div>`;
          searchComp.innerHTML = foodResult;
        }
        const heartIcons = document.querySelectorAll(".food-box__fav--heart");
        heartIcons.forEach((heartIcon) => {
          heartIcon.addEventListener("click", () => {
            const foodId = heartIcon.getAttribute("data-id");
            const heartImage = heartIcon.querySelector("i");

            heartImage.classList.toggle("heart-red");
          });
        });

        // ------ cheking cart ------
        this.checkCart();
      });
    }
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
            ...allFood.find((c) => c.id === id),
            quantity: 1,
          });
          Storage.addToCart(allCart);
        }
        this.searchResult();
        new NavbarComponent().loadCart();
      });
    });
  }
}

export default SearchBox;
