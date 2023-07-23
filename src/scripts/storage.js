export class Storage {
  constructor() {
    
  }

  static loadCart() {
    const savedFood = JSON.parse(localStorage.getItem("foods")) || [];
    console.log(savedFood);
    return savedFood;
  }

  static addToCart(foods) {
    localStorage.setItem("foods", JSON.stringify(foods));
  }
}
