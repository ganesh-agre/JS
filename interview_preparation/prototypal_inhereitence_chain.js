// Example of prototypal chaining in JavaScript

// Vehicle constructor function
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Adding a method to the Vehicle prototype
Vehicle.prototype.getInfo = function () {
  return `${this.year} ${this.make} ${this.model}`;
};

// Car constructor function inherits from Vehicle
function Car(make, model, year, doors) {
  Vehicle.call(this, make, model, year);
  this.doors = doors;
}

// Set Car prototype to inherit from Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Create instances of Vehicle, Car, and ElectricCar
const myCar = new Car("Toyota", "Camry", 2022, 4);

// Using the methods
console.log(myCar.getInfo()); // Output: 2022 Toyota Camry, 4 doors

// Demonstrating prototype inheritance
console.log(myCar instanceof Car); // true

console.log(myCar instanceof Vehicle); // true
console.log(myCar.constructor);
