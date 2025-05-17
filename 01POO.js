class Ball {
  constructor(color, circumference, material) {
    this.color = color;
    this.circumference = circumference;
    this.material = material;
  }
  switchColor(newColor) {
    this.color = newColor;
  }
  showColor() {
    return this.color;
  }
}
