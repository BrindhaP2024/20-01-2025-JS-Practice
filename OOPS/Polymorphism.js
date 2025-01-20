class Vehicle {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`${this.name} is starting.`);
  }
}

// Derived class - Car
class Car extends Vehicle {
  constructor(brand, model) {
    super('Car');  
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} car is starting with an engine sound vroom!`);
  }
}

class Bicycle extends Vehicle {
  constructor(brand, type) {
    super('Bicycle');
    this.brand = brand;
    this.type = type;
  }

  start() {
    console.log(`${this.brand} ${this.type} bicycle is starting by pedaling.`);
  }
}

const myCar = new Car('Honda', 'Suzuki');
const myBicycle = new Bicycle('Trek', 'Mountain');


myCar.start();  
myBicycle.start();  
