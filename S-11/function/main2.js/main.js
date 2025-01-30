// function in ts / ?
// function data(fullName?: string, age?: number, email?: string):void {
//   console.log(
//     `my name is ${fullName} and my age is ${age} and my email is ${email}`
//   );
// }
// console.log(data("hassan",45,"test@yahoo.com"));
//  function procces sallary
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
//   }
// }
// console.log(processSalary(12,"phd"));
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
// summery function=>(Recursive)
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
//   let x = ():string => {
//     return "erfan ahmadi";
//   };
//   return x()
// };
// let x:any = app()
// console.log(x);
// function in function example
