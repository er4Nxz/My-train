// debugger;
// {
// //casting in ts
//   let x: number = Number(prompt("enter your age"));
//   console.log(typeof x, x);
//   let y: string | null = prompt("fullName");
//   console.log(typeof y, y);
//   let test = String(x);
//   console.log(typeof test, test);
//   let test_2 = Number(y);
//   console.log(test_2);
// }
// let username: string | null = prompt("username");
// let password: number = Number(prompt("pass"));
// if ((username === "erfan")) {
//   console.log(`this username ${username} its all right`);
//   if ((password === 12345)) {
//     console.log("WELCOM!");
//   } else {
//     console.log("pass is incorect");
//   }
// } else {
//     console.log("username is incorect");
//     if(password === 12345){
//         console.log("pass is correct");
//     }else{
//         console.log("get out of my web site");
//     }
// }
// if (username === "erfan" && password === 12345) {
//   console.log("WELCOM...!");
//   console.log(`your username is ${username} and your pass is ${password}`);
// } else {
//   console.log("get out of my web site");
// }
//  CALCULATOR
// let num1: number = Number(prompt("enter first number"));
// let operator: string | null = prompt("enter operator", "+ - * /");
// let num2: number = Number(prompt("enter second number"));
// console.log(num1, operator, num2);
// if (operator === "+") {
//   let sum = num1 + num2;
//   console.log(sum);
// } else if (operator === "-") {
//   let sub = num1 - num2;
//   console.log(sub);
// } else if (operator === "*") {
//   let mul = num1 * num2;
//   console.log(mul);
// } else if (operator === "/") {
//   let div = num1 / num2;
//   console.log(div);
// } else {
//   console.log("WTF???");
// }
// Salary
// let fullName: string | null = prompt("enter your name?");
// let clock: number = Number(prompt("clock?"));
// let degree: string | null = prompt("degree?");
// if (degree === "phd") {
//   let salaryPure = clock * 300;
//   let tax = salaryPure * 0.1; //مالیات
//   let insurance = salaryPure * 0.05; //بیمه
//   let salary = salaryPure - tax - insurance;
//   console.log(`your salary is ${salary} and your name is ${fullName}`);
// } else if (degree === "master") {
//   let salaryPure = clock * 200;
//   let tax = salaryPure * 0.1; //مالیات
//   let insurance = salaryPure * 0.05; //بیمه
//   let salary = salaryPure - tax - insurance;
//   console.log(`your salary is ${salary} and your name is ${fullName}`);
// } else if (degree === "diploma") {
//   let salaryPure = clock * 100;
//   let tax = salaryPure * 0.1; //مالیات
//   let insurance = salaryPure * 0.05; //بیمه
//   let salary = salaryPure - tax - insurance;
//   console.log(`your salary is ${salary} and your name is ${fullName}`);
// } else {
//   console.log("check your degree");
// }
// switch
// let day: number = Number(prompt("enter day?"));
// {
//   switch (day) {
//     case 1: {
//       console.log("shanbe");
//       break;
//     }
//     case 2: {
//       console.log("1-shhanbe");
//       break;
//     }
//     case 3: {
//       console.log("2-shhanbe");
//       break;
//     }
//     case 4: {
//       console.log("3-shhanbe");
//       break;
//     }
//     case 5: {
//       console.log("4-shhanbe");
//       break;
//     }
//     case 6: {
//       console.log("5-shhanbe");
//       break;
//     }
//     default:
//       {
//         console.log("jome");
//         break;
//       }
//       console.log("chetori");
//   }
//   console.log("khodafez");
// }
// console.log("salam");
// salary with switch
// let fullName: String | null = String(prompt("Enter your full name"));
// let clock: number = Number(prompt("clock?"));
// let degree: string | null = prompt("degree?");
// switch (degree) {
//   case "phd": {
//     let salaryPure = clock * 300;
//     let tax = salaryPure * 0.1; //مالیات
//     let insurance = salaryPure * 0.05; //بیمه
//     let salary = salaryPure - tax - insurance;
//     console.log(`your salary is ${salary} and your name is ${fullName}`);
//     break
//   }
//   case "master": {
//     let salaryPure = clock * 200;
//     let tax = salaryPure * 0.1; //مالیات
//     let insurance = salaryPure * 0.05; //بیمه
//     let salary = salaryPure - tax - insurance;
//     console.log(`your salary is ${salary} and your name is ${fullName} and your degree is ${degree} and your clock is ${clock} and your tax is ${tax} and your insurance is ${insurance}`);
//     break
//   }
//   case "diploma": {
//     let salaryPure = clock * 150;
//     let tax = salaryPure * 0.1; //مالیات
//     let insurance = salaryPure * 0.05; //بیمه
//     let salary = salaryPure - tax - insurance;
//     console.log(`your salary is ${salary} and your name is ${fullName}`);
//     break
//   }
//   default: {
//     console.log("check your degree");
//   }
// }
// ternery operator
// let age: number = Number(prompt("enter your age"));
// let result =
//   age >= 18 ? `your age is ok ..${age}` : `your age is not ok ${age}`;
// console.log(result);
// FOR
// for (let i: number = 1; i <= 10; ++i) document.write(`<h1>${i}</h1>`);
// if in for
// let x: number = Number(prompt("ENTER NUMBER"));
// for (let i: number = 1; i <= x; ++i)
//   if (i % 2 === 0) document.write(`<div class='even'>${i}</div>`);
//   else document.write(`<div class='odd'>${i}</div>`);
// جمع اعداد قبل از عدد ورودی
var x = Number(prompt("ENTER NUMBER"));
var sum = 0;
for (var i = 1; i <= x; ++i) {
    console.log(i);
    sum += i;
}
console.log(sum);
