// // type unknown
// let test: unknown = 12;
// test++; // ERROR
// if (typeof test == "number") {
//   test++;
// }
// console.log(test);

// //type casting
// let test: unknown = 12;
// let test2 =  test as string

// // const assertion
// const number = [1,2,3] as const
// number.push(10) // ERROR
// console.log(number);

// Example
// let number = [10, 20] as const;
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// console.log(add(...number));

// // type casting in dom
// const App = document.querySelector("#app"); // ERROR
// const App = document.querySelector("#app") as HTMLDivElement; // way 1
// const App = document.querySelector("#app")!; // way 2
// console.log(App?.innerHTML); // way3
// console.log(App.innerHTML);
1