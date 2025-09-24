// // JSON
// const text = { name: "erfan", email: "e@e.com" };
// const myString = JSON.stringify(text)
// console.log(myString);
// const myobject = JSON.parse(myString)
// console.log(myobject);

// // intersection type
// type Admin = {
//   name: string;
//   Capability: string[];
// };
// type Teacher = {
//   name: string;
//   startOfActivity: Date;
// };
// type TeachAd = Teacher & Admin;

// const erfan: TeachAd = {
//   name: "erfan",
//   Capability: ["read comments"],
//   startOfActivity: new Date(),
// };
// console.log(erfan);

// // type gard / in
// type Admin = {
//   name: string;
//   Capability: string[];
// };
// type Teacher = {
//   name: string;
//   startOfActivity: Date;
// };
// let showProperty = (member: Teacher | Admin) => {
//   console.log(member.name);
//   if ("Capability" in member) {
//     console.log(member.Capability);
//   } else if ("startOfActivity" in member) {
//     console.log(member.startOfActivity);
//   }
// };
// let erfan: Teacher = {
//   name: "erfan",
//   startOfActivity: new Date(),
// };
// showProperty(erfan);

// // instance of
// class Car {
//   constructor(public name: string, public model: string) {
//     this.model = model;
//     this.name = name;
//   }
//   showName(): void {
//     console.log("NAME =>" + this.name);
//   }
// }
// class Truk extends Car {
//   constructor(public name: string, public model: string) {
//     super(name, model);
//   }
//   showModel(): void {
//     console.log("MODEL =>" + this.model);
//   }
// }
// let useCar = (car: Car | Truk): void => {
//   if (car instanceof Truk) {
//     console.log(car.showModel());
//   } else {
//     console.log(car.showName());
//   }
// };
// let p206 = new Car ("pegute","206")
// useCar(p206)

// // discrimanted union
// type Admin = {
//   type: "Admin";
//   name: string;
//   Capability: string[];
// };
// type User = {
//   type: "User";
//   name: string;
//   startOfActivity: Date;
// };
// let showProperty = (member: User | Admin) => {
//   switch (member.type) {
//     case "Admin": {
//       console.log(member.Capability);
//       break;
//     }
//     case "User": {
//       console.log(member.startOfActivity);
//       break;
//     }
//     default:
//       break;
//   }
// };