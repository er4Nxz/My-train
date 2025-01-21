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
debugger;
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
var num1 = Number(prompt("enter first number"));
var operator = prompt("enter operator", "+ - * /");
var num2 = Number(prompt("enter second number"));
console.log(num1, operator, num2);
if (operator === "+") {
  var sum = num1 + num2;
  console.log(sum);
} else if (operator === "-") {
  var sub = num1 - num2;
  console.log(sub);
} else if (operator === "*") {
  var mul = num1 * num2;
  console.log(mul);
} else if (operator === "/") {
  var div = num1 / num2;
  console.log(div);
} else {
  console.log("WTF???");
}
