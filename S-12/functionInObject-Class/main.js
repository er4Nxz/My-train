// Composition array object
// let person: any[] = [
//   {
//     name: "John",
//     age: 30,
//     city: "New York",
//     isMarrid: true,
//   },
//   {
//     name: "Jane",
//     age: 25,
//     city: "Los Angeles",
//     isMarrid: false,
//   },
//   {
//     name: "Bob",
//     age: 40,
//     city: "Chicago",
//     isMarrid: true,
//   },
// ];
// let result: any = person.filter(
//   (item) => item.age >= 30 && item.isMarrid === true
// );
// console.log(result);
// function in object/this (example)
// let laptop = {
//   name: "lenovo",
//   price: 5000,
//   color: "black",
//   isAvailable: true,
//   Available() {
//     if (this.isAvailable === true) {
//       return `${this.name}-${this.price}-${this.color} is available`;
//     } else {
//       return `${this.name}-${this.price}-${this.color} is not available`;
//     }
//   },
//   discount(discount: number) {
//     return this.price - (discount / 100) * this.price;
//   },
// };
// console.log(laptop.discount(10));
// console.log(laptop.Available());
// console.log(laptop);
// class (ecma)
// class Person {
//     fullName="unknow";
//     age:any="unknow";
//     email="unknow";
//     isMarrid:any="unknow";
//     printData() {
//       return `${this.fullName} - ${this.age} - ${this.email} - ${this.isMarrid}`;
//     }
//   }
//   let newAcount = new Person();
//   newAcount.fullName = "John";
//   newAcount.age = 25;
//   newAcount.email = "john@gmail.com";
//   newAcount.isMarrid = true;
//   document.write(`<h1>${newAcount.printData()}</h1>`);
//   let newAcount2 = new Person();
//   newAcount2.fullName = "jams";
//   newAcount2.age = 30;
//   newAcount2.email = "jams@gmail.com";
//   newAcount2.isMarrid = false;
//   document.write(`<h1>${newAcount2.printData()}</h1>`);
// class (counstructor) (ecma)
// class Person {
//   fullName;
//   age;
//   email;
//   isMarrid;
//   constructor() {
//     this.fullName = String(prompt("name"));
//     this.age = Number(prompt("age"));
//     this.email = String(prompt("email"));
//     this.isMarrid = Boolean(prompt("is marrid"));
//   }
//   Marrid() {
//     if (this.isMarrid == true) {
//       return "is marrid";
//     } else {
//       return "is not marrid";
//     }
//   }
//   printData() {
//     return `${this.fullName} - ${this.age} - ${this.email} - ${this.Marrid()}`;
//   }
// }
// let newAcount = new Person();
// document.write(`<h1>${newAcount.printData()}</h1>`);
// class (example)=>calculator (ecma)
// class Calculator {
//   x;
//   y;
//   operand;
//   constructor(x?, y?, operand?) {
//     this.x = prompt("number 1...?");
//     this.y = prompt("number 2...?");
//     this.operand = prompt("operand...?");
//   }
//   add() {
//     switch (this.operand) {
//       case "+": {
//         return `${this.x}+${this.y}=${this.x + this.y}`;
//       }
//       case "-": {
//         return `${this.x}-${this.y}=${this.x - this.y}`;
//       }
//       case "*": {
//         return `${this.x}*${this.y}=${this.x * this.y}`;
//       }
//       case "/": {
//         return `${this.x}/${this.y}=${this.x / this.y}`;
//       }
//       default: {
//         return `fuild`;
//       }
//     }
//   }
// }
// let a1 = new Calculator();
// document.write(`<h1>${a1.add()}</h1>`)
//class (example)=>calculator (ts)
// class Calculator {
//   private x:number;
//   private y:number;
//   private operand:string;
//   constructor() {
//     this.x = Number(prompt("number 1...?"));
//     this.y = Number(prompt("number 2...?"));
//     this.operand = String(prompt("operand...?"));
//   }
//   public add():any {
//     switch (this.operand) {
//       case "+":return `${this.x}+${this.y}=${this.x + this.y}`;
//       case "-":return `${this.x}-${this.y}=${this.x - this.y}`;
//       case "*":return `${this.x}*${this.y}=${this.x * this.y}`;
//       case "/":return `${this.x}/${this.y}=${this.x / this.y}`;
//       default:return `fuild`;
//     }
//   }
// }
// let a1 = new Calculator();
// document.write(`<h1>${a1.add()}</h1>`)
