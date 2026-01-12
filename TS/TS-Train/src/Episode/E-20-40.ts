// // type unknown
// let test: unknown = 12;
// test++; // ERROR
// if (typeof test == "number") {
//   test++;
// }
// console.log(test);

//type casting
// let test: unknown = 12;
// let test2 =  test as string

// // const assertion
// const number = [1,2,3] as const
// number.push(10) // ERROR
// console.log(number);

// Example
// let numb = [10, 20] as const;
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(add(...numb));

// // type casting in dom
// const App = document.querySelector("#app"); // ERROR
// const App = document.querySelector("#app") as HTMLDivElement; // way 1
// const App = document.querySelector("#app")!; // way 2
// console.log(App?.innerHTML); // way3
// console.log(App.innerHTML);

// // union type make type
// type Role = "admin" | "user" | "teacher";
// const user: {
//   id: number;
//   name: string;
//   role: Role;
// } = {
//   id: 1,
//   name: "erfan",
//   role: "admin",
// };
// console.log(user);

// // type function
// let sum = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// let logger = (param: void): void => {
//   console.log(param);
// };
// let testFunc: (num1: number, num2: number) => number;
// testFunc = sum;
// testFunc = logger; // ERROR

// // callback
// let testFunc = (
//   num1: number,
//   num2: number,
//   callback: (param: any) => void
// ): void => {
//   let result = num1 + num2;
//   callback(result);
// };

// testFunc(12, 8, (result) => {
//   console.log(result);
// });

// // alias type
// type bolNum = number | boolean;
// type numStr = bolNum | string;
// let item1: numStr = 12;
// let item2: numStr = 13;
// let item3: numStr = 14;
// item1 = true
// console.log(item1,item2,item3);

// // alias type litteral
// type Role = "admin" | "User" | "Teacher";
// let logger = (param: Role): void => {
//   if (param === "admin" || param === "User" || param === "Teacher") {
//     console.log(param);
//   }
// };
// logger("Teacher");
