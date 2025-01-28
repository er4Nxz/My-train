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
