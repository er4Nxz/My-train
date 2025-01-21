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
var fullName = prompt("enter your name?");
var clock = Number(prompt("clock?"));
var degree = prompt("degree?");
if (degree === "phd") {
    var salaryPure = clock * 300;
    var tax = salaryPure * 0.1; //مالیات
    var insurance = salaryPure * 0.05; //بیمه
    var salary = salaryPure - tax - insurance;
    console.log("your salary is ".concat(salary, " and your name is ").concat(fullName));
}
else if (degree === "master") {
    var salaryPure = clock * 200;
    var tax = salaryPure * 0.1; //مالیات
    var insurance = salaryPure * 0.05; //بیمه
    var salary = salaryPure - tax - insurance;
    console.log("your salary is ".concat(salary, " and your name is ").concat(fullName));
}
else if (degree === "diploma") {
    var salaryPure = clock * 100;
    var tax = salaryPure * 0.1; //مالیات
    var insurance = salaryPure * 0.05; //بیمه
    var salary = salaryPure - tax - insurance;
    console.log("your salary is ".concat(salary, " and your name is ").concat(fullName));
}
else {
    console.log("check your degree");
}
