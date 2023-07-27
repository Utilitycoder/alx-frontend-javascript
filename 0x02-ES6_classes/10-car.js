export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const newCar = Object.create(Object.getPrototypeOf(this));
    newCar._brand = undefined;
    newCar._motor = undefined;
    newCar._color = undefined;
    return newCar;
  }
}
