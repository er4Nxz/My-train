// // object oriented
// // class
// class Person {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }
// const erfanPerson = new Person("erfan", "e@e.com", 18);
// console.log(erfanPerson);

// // using class as type
// class Person {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }
// const mmdPerson = new Person("mmd", "mmd@mmd.com", 20);
// let testPerson: Person[] = [
//   { name: "erfan", email: "e@e.com", age: 18 },
//   { name: "erfan", email: "e@e.com", age: 18 },
//   { name: "erfan", email: "e@e.com", age: 18 },
//   mmdPerson,
// ];
// console.log(testPerson);

// // extends
// class Person {
//   name: string;
//   email: string;
//   age: number;
//   constructor(name: string, email: string, age: number) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//   }
// }
// class Student extends Person {
//   lessons: string[];
//   constructor(name: string, email: string, age: number, lessons: string[]) {
//     super(name, email, age);
//     this.lessons = lessons;
//   }
// }
// const newStudent = new Student("erfan", "e@e.com", 18, ["math", "english"]);
// console.log(newStudent);

// // access modiefier => public-private-readOnly-protected
// class Person {
//   public name: string;
//   readonly email: string;
//   protected age: number;
//   private lessons: string[];
//   constructor(name: string, email: string, age: number, lessons: string[]) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.lessons = lessons;
//   }
//   setAge(newAge: number) {
//     this.age = newAge;
//   }
// }
// const newPerson = new Person("erfan", "e@e.com", 18);
// newPerson.name = "sadaf";
// newPerson.email = "s@s.com"; // ERROR
// newPerson.lessons; // ERROR => lessons is not find because private access
// newPerson.age  // ERROR => age is not find because access only in class
// newPerson.setAge(12)

// // shorthand set type in class
// class Person {
//   constructor(
//     public name: string,
//     private email: string,
//     readonly age: number,
//     protected lessons: string[]
//   ) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.lessons = lessons;
//   }
// }

// // geter - seter
// class Person {
//   constructor(
//     public name: string,
//     private email: string,
//     readonly age: number,
//     private lessons: string[]
//   ) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.lessons = lessons;
//   }
//   get getLessons() {
//     return this.lessons;
//   }
//   set setLessons(newLessons: string) {
//     this.lessons.push(newLessons);
//   }
// }
// const newPerson = new Person("erfan", "e@e.com", 18, ["math", "english"]);
// newPerson.lessons; // ERROR => because lessons is private
// console.log(newPerson.getLessons);
// newPerson.setLessons = "TS"
// console.log(newPerson.getLessons);
