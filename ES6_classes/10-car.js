export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(value) {
    if (typeof value !== 'undefined' && typeof value !== 'string') {
      throw new TypeError('brand must be of type string');
    }
    this._brand = value;
  }

  get brand() {
    return this._brand;
  }

  set motor(value) {
    if (typeof value !== 'undefined' && typeof value !== 'string') {
      throw new TypeError('motor must be of type string');
    }
    this._motor = value;
  }

  get motor() {
    return this._motor;
  }

  set color(value) {
    if (typeof value !== 'undefined' && typeof value !== 'string') {
      throw new TypeError('color must be of type string');
    }
    this._color = value;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
