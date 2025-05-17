class Retangle {
  constructor(length, height) {
    this.length = length;
    this.height = height;
  }
  switchSide(newSide) {
    this.side = newSide;
  }
  showSide() {
    return this.side;
  }
  area() {
    return this.length * this.height;
  }
  perimeter() {
    return this.lenght * 2 + this.height * 2;
  }
}
