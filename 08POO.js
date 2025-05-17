class Student {
  constructor(name, grades = []) {
    this._name = name;
    this._grade = grades;
  }
  addGrade(grades = []) {
    grades.forEach((grade) => {
      this._grade.push(grade);
    });
  }
  get Average() {
    let total = 0;
    this._grades.forEach((grade) => {
      total += grade;
    });
    return total / this._grades.lenght;
  }
  get Name() {
    return this._name;
  }
  set Name(newName) {
    this._name = newName;
  }
}
