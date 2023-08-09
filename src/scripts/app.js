import Food from "./components/Food.js";
import Footer from "./components/footer.js";
import NavbarComponent from "./components/navbar.js";
import { Storage } from "./storage.js";
import Cart from "./components/cart.js";
import menuPage from "./components/FoodMenu.js";
import SearchBox from "./components/SearchBar.js";
import loginVerificationCode from "./components/loginVerification.js";
// swiper library
import swiper from "./components/swiper.js";
import Payment from "./components/payment.js";
import phoneHolder from "./components/dashboard.js";

const navbar = new NavbarComponent();

const footer = new Footer();

if (window.location.pathname.toLowerCase().includes("/public/foods")) {
  const food = new Food();
  food;
}
if (window.location.pathname.toLowerCase().includes("/public/cart")) {
  const cart = new Cart();
  cart;
}

const searchbox = new SearchBox();

if (window.location.pathname.toLowerCase().includes("/public/menu")) {
  const menu = new menuPage();
  menu;
}
const storage = new Storage();
const Login = new loginVerificationCode();

if (window.location.pathname.toLowerCase().includes("complete")) {
  const payment = new Payment();
  payment.showCartItem();
  payment.calculatePrice();
}
class app {
  constructor() {
    swiper;
    navbar.loadCart();
    navbar.checkLogin();
    searchbox.onSearch();
    searchbox.doSearch();
    storage;
    Login;
    if (window.location.pathname.toLowerCase().includes("/public/searchpage")) {
      searchbox.searchResult();
    }
    if (window.location.pathname.includes("dashboard")) phoneHolder();
    footer;
  }
}
export default new app();
