import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const newCar = new Car();
    this._brand = undefined;
    this._motor = undefined;
    this._color = undefined;
    return newCar;
  }
}
