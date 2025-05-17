class Person {
  constructor(name, age, height) {
    this._name = name;
    this._age = age;
    this._height = height;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }
  get height() {
    return this._height;
  }
  set height(newHeight) {
    this._height = newHeight;
  }
}
