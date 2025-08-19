export default class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
      && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this.sqft = sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft is not a number');
    }
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }
}
