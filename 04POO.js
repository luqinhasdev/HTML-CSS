class Person {
  constructor(name, age, weight, height) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
  }
  toGrowOld() {
    this.age + 1;
    if ((this.age -= 21)) {
      this.height += 0.5;
    }
  }
  toGrowFat() {
    this.weight + 0.5;
  }
  toLoseWeight() {
    this.weight - 0.5;
  }
  toGrowHeight() {
    this.height + 0.5;
  }
}
