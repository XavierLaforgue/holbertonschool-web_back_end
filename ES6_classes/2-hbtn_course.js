export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = value;
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((v) => typeof v === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = value;
  }

  get students() {
    return this._students;
  }
}
