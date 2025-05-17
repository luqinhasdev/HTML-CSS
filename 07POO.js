class Retangle {
  constructor(base, height) {
    this._base = base;
    this._height = height;
  }
  get base() {
    return this._base;
  }
  set base(newBase) {
    this._base = newBase;
  }
  get height() {
    return this._height;
  }
  set height(newHeight) {
    this._height = newHeight;
  }
  calculateArea() {
    return this.base * this.height;
  }
}
