import NavbarComponent from "./components/navbar.js";
import swiper from "./components/swiper.js";

const navbar = new NavbarComponent();

class app {
  constructor() {
    navbar.loadCart();
  }
}
export default new app();
