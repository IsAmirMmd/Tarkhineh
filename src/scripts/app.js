import Food from "./components/food.js";
import Footer from "./components/footer.js";
import NavbarComponent from "./components/navbar.js";
import swiper from "./components/swiper.js";

const navbar = new NavbarComponent();

const footer = new Footer();
if (window.location.pathname !== "/") {
  const food = new Food();
}

class app {
  constructor() {
    navbar.loadCart();
  }
}
export default new app();
