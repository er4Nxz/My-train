// + - * / % **
x = 18;
document.write(
  `<h1>my age is ${x} and my birth day in ${1403 - x} year in miladi ${
    1403 - x + 621
  }</h1>`
);
// change type string to number
// in js => parseint parsefloat
let age = parseInt(prompt("enter your age"));
console.log(age, typeof age);
// in es => number
let f = Number(prompt("adad bezan"));
console.log(typeof f);
// +
let g = +prompt("ye adad dege bzn");
console.log(typeof g);
// change type number to string