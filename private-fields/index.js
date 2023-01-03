class User {

  static #PASSING_MARKS = 40; // can be static as well
  static #UNIQUE_ID = 0;
  #id = null;
  
  constructor(name, studentClass, marks) {
    this.name = name;
    this.studentClass = studentClass;
    this.marks = marks;
    this.#id = ++User.#UNIQUE_ID;
  }

  getStudentsNextClass() {
    let newClass = this.studentClass;
    try {
      this.#hasStudentPassedTheExam();
      newClass++;
    } catch (e) {
      console.log(e);
    } finally {
      return newClass;
    }
  }

  #hasStudentPassedTheExam() {
    console.log(this.marks);
    if (this.marks < User.#PASSING_MARKS) {
      throw new Error(`${this.name} : ${this.#id} has failed`);
    }
  }

  getUserId () {
    return this.#id;
  }
}

const user = new User("Ayush", 2, 50);
const otherUser = new User("ak", 5, 20);
// console.log(user.#id); // wouldn't be able to access private members
console.log(user.getStudentsNextClass());
console.log(user.getUserId());

console.log(otherUser.getUserId());
console.log(otherUser.getStudentsNextClass());
