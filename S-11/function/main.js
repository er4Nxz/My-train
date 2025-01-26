// functional
// prinData();
// function prinData() {
//   for (let t = 1; t <= 10; t++) {
//     for (let i = 1; i <= 10; i++) {
//       document.write(`<h1>${i}-hello-world!</h1>`);
//     }
//     document.write("<hr/>");
//   }
// }

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
function calculator(x, y, operator) {
  switch (operator) {
    case "+": {
      console.log(`${x}+${y}=${x + y}`);
      break;
    }
    case "-": {
      console.log(`${x}-${y}=${x - y}`);
      break;
    }
    case "*": {
      console.log(`${x}*${y}=${x * y}`);
      break;
    }
    case "/": {
      console.log(`${x}/${y}=${x / y}`);
      break;
    }
  }
}
calculator(10, 10, "*");
