// function in ts / ?
// function data(fullName?: string, age?: number, email?: string):void {
//   console.log(
//     `my name is ${fullName} and my age is ${age} and my email is ${email}`
//   );
// }
// console.log(data("hassan",45,"test@yahoo.com"));
//  function procces sallary
// let clock:number= Number(prompt("clock...?"))
// let degree:string=String(prompt("degree"))
// let processSalary=(clock: number, degree: string): any =>{
//   switch (degree) {
//     case "phd": {
//       let sallaryPure: number = clock * 300;
//       let tax: number = sallaryPure * 0.15;
//       let sallaryFinal: number = sallaryPure - tax;
//       return sallaryFinal;
//     }
//     case "master": {
//       let sallaryPure: number = clock * 200;
//       let tax: number = sallaryPure * 0.15;
//       let sallaryFinal: number = sallaryPure - tax;
//       return sallaryFinal;
//     }
//     case "deploma": {
//       let sallaryPure: number = clock * 100;
//       let tax: number = sallaryPure * 0.15;
//       let sallaryFinal: number = sallaryPure - tax;
//       return sallaryFinal;
//     }
//     default:{
//         return "VALUE IS INCORECT"
//     }
//   }
// }
// console.log(processSalary(clock,degree));
// type never
// let x:never
// x=100
// type unknow
// let x:unknown=Boolean("")
// console.log(x,typeof x);
// syntax type
// type EA = number;
// let data = (x:EA): EA => x;
// console.log(data(100));
// sumiton function=>(Recursive)
// let x: number = Number(prompt("enter number"));
// let adder = (x: number): number => {
//   if (x === 1) {
//     return 1;
//   } else {
//     return x + adder(x - 1);
//   }
// };
// console.log(adder(x));
// factorial function=>(Recursive)
// let x: number = Number(prompt("enter number"));
// let adder = (x: number): number => {
//   if (x === 1) {
//     return 1;
//   } else {
//     return x * adder(x - 1);
//   }
// };
// console.log(adder(x));
// fibonaci function=>(Recursive)
// let n: number = Number(prompt("enter number"));
// let fibonacci = (n: number): number => {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// };
// console.log(fibonacci(n));
// function in function / ارایه
// let app = ():any=>{
//     let x=()=>{
//         return " erfan ahmadi "
//     }
//     let y=()=>{
//         return " sadaf ahmadi "
//     }
//     let z=()=>{
//         return " my childe "
//     }
//     return [x(),y(),z()]
// }
// console.log(app()[0]);
// console.log(app()[1]);
// console.log(app()[2]);
// function in function example
// let app = (): any => {
//   let x = (): string => {
//     return "erfan ahmadi";
//   };
//   return x();
// };
// // let x: any = app();
// console.log(app());
// function in function / call back
// let booking = (): any => {
//   let counter: number = 0;
//   return (): any => {
//     counter++;
//     return counter;
//   };
// };
// let counter:any =booking()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// توابعی ک بخوایم در جا صداش بزنیم و جای دیگری ازش استفاده نکنیم /iife
// (()=>{
//    console.log( "hello-world");
// })()
// array / data.lenght / print value in array
// let data = ["erfan", "ahmadi", 18, null, false];
// console.log(data[2], typeof data[2],data.length,data);
// for (let i=0 ;i<data.length;i++){
//     console.log(data[i]);
// }
// array nested (js)
// let data = [
//   ["erfan", "ahmadi"],
//   [18, null, false],
//   ["dada", true],
// ];
// // صدا زدن معمولی
// // console.log(data[0][0]);
// // with for
// // for (let i = 0; i < data.length; i++) {
// //   for (let j = 0; j < data[i].length; j++) {
// //     console.log(data[i][j]);
// //   }
// // }
// //for of
// for (const item of data) {
//   for (const item2 of item) {
//     console.log(item2);
//   }
// }
//array (ts)
// let data: (string | null | number)[][] = [
//   ["erfan", "ahmadi", 18, null],
//   ["erfan", "ahmadi", 18, null],
// ];
// for (const item of data) {
//   for (const item2 of item) {
//     console.log(item2);
//   }
// }
