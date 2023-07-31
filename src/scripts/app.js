import Food from "./components/Food.js";
import Footer from "./components/footer.js";
import NavbarComponent from "./components/navbar.js";
import { Storage } from "./storage.js";
import Cart from "./components/cart.js";
import menuPage from "./components/FoodMenu.js";
import SearchBox from "./components/SearchBar.js";
// swiper library
import swiper from "./components/swiper.js";

const navbar = new NavbarComponent();

const footer = new Footer();

if (window.location.pathname === "/public/foods.html") {
  const food = new Food();
}
if (window.location.pathname === "/public/cart.html") {
  const cart = new Cart();
}

const searchbox = new SearchBox();

if (window.location.pathname === "/public/menu.html") {
  const menu = new menuPage();
}

const storage = new Storage();

class app {
  constructor() {
    navbar.loadCart();
    searchbox.onSearch();
    searchbox.doSearch();
    if (window.location.pathname === "/public/searchPage.html") {
      searchbox.searchResult();
    }
  }
}
export default new app();
