const obj = {};
console.log(Object.getPrototypeOf(obj));


function Vehicle(name) {
    this.name = name;
}

Vehicle.prototype.move = function () {
    console.log(`${this.name} is moving!`);
};

function Car(name, model) {
    Vehicle.call(this, name);
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
    console.log(`${this.name} is honking! Beep beep!`);
};

const myCar = new Car("Toyota", "Corolla");

// Calling methods
myCar.move();
myCar.honk();
