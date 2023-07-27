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
    newCar._brand = self._brand;
    newCar._motor = self._motor;
    newCar._color = self._color;
    return newCar;
  }
}
