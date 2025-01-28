// functional matris
// function prinData(x = prompt("enter number")) {
//   for (let t = 1; t <= x; t++) {
//     document.write(`<h1 class='t'>${t}-</h1>`);
//     for (let i = 1; i <= x; i++) {
//       document.write(`<h2 class='b'>${i}</h2>`);
//     }
//     document.write("<hr/>");
//   }
// }
// prinData();

//hoisting
// console.log(x);
// var x = 10;

// function input
// function allData(firstName="Not filled",lastName="Not filled",age=0,email="Not filled") {
//   document.write(`<h3 class='b'>my name is ${firstName} and my lastName is ${lastName} and my age is ${age} and my email is ${email}</h3>`);
// }
// allData("siddharth","sharma",20,"siddharth@gmail.com");
// allData()

// function calculator
// let x = +prompt("x...?")
// let operator = prompt("operator....?")
// let y = +prompt("y...?")
// function calculator(x, y, operator) {
//   switch (operator) {
//     case "+": {
//       console.log(`${x}+${y}=${x + y}`);
//       break;
//     }
//     case "-": {
//       console.log(`${x}-${y}=${x - y}`);
//       break;
//     }
//     case "*": {
//       console.log(`${x}*${y}=${x * y}`);
//       break;
//     }
//     case "/": {
//       console.log(`${x}/${y}=${x / y}`);
//       break;
//     }
//     default:{
//         console.log("invalid operator");
//     }
//   }
// }
// console.log(calculator(x,y,operator));

// return / if boolean
// let x = prompt("fullName");
// let y = Number(prompt("age"));
// function allData(x,y){
//   return `my full name is ${x} and my age is ${y}`
// }
// // let result = allData(x,y)
// // console.log(result)
// if(allData(x,y)){
//   console.log("confirm");
// }else{
//   console.log("deny");
// }


// function age
// let age = +prompt("enter your age")
// function milady(age){
//   return 1403-age+621
// }
// console.log(milady(age))


// function no name (ecma) (impilicit)
// let fullName = prompt("name?")
// let age = +prompt("age?")
// let degree = prompt("degree?")
// let data = function(fullName,age,degree){
//     console.log(`${fullName} and ${age} and ${degree}`);
// }
// data(fullName,age,degree)


// arrow function (ecma) (impilicit)
// let fullName = prompt("name?")
// let age = +prompt("age?")
// let degree = prompt("degree?")
// let data = (fullName,age,degree)=>{
//     console.log(`${fullName} and ${age} and ${degree}`);
// }
// data(fullName,age,degree)


// function (ecma) (explicit)
// let data = x => console.log(x);
// data(prompt("fullName?"))

// function (ecma) (explicit) (return)
// let data  = x=> /*return*/ x+" and im erfan ahmadi"
// console.log(data("hello world"))


// bigint type

// let x = 100n

// let x = BigInt(prompt("enter a number"))

// console.log(x , typeof x);