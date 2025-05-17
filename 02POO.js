class Square {
  constructor(side) {
    this.side = side;
  }
  switchSide(newSide) {
    this.side = newSide;
  }
  showSide() {
    return this.side;
  }
  area() {
    return side ** 2;
  }
}
