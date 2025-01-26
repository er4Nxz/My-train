// functional matris
prinData();
function prinData() {
  let x = prompt("enter number")
  for (let t = 1; t <= x; t++) {
    document.write(`<h1 class='t'>${t}-</h1>`)
    for (let i = 1; i <= x; i++) {
      document.write(`<h2 class='b'>${i}</h2>`);
    }
    document.write("<hr/>");
  }
}

//hoisting
// console.log(x);
// var x = 10;

// function input
// function allData(firstName="Not filled",lastName="Not filled",age=0,email="Not filled") {
//   document.write(`<h3 class='b'>my name is ${firstName} and my lastName is ${lastName} and my age is ${age} and my email is ${email}</h3>`);
// }
// allData("siddharth","sharma",20,"siddharth@gmail.com");
// allData()

//function calculator
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
//   }
// }
// calculator(10, 10, "*");



