import Footer from "./components/footer.js";
import NavbarComponent from "./components/navbar.js";
import swiper from "./components/swiper.js";

const navbar = new NavbarComponent();

const footer = new Footer();

class app {
  constructor() {
    navbar.loadCart();
  }
}
export default new app();
