function createCar(brand, model) {
  return {
    brand,
    model,
    drive() {
      console.log(`${this.brand} ${this.model} is driving...`);
    }
  };
}

const car1 = createCar("Tesla", "Model S");
const car2 = createCar("BMW", "X5");

car1.drive();
car2.drive();
