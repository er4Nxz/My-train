let onBut = document.querySelector(".on");
let img = document.querySelector(".img");
let offBut = document.querySelector(".off");
onBut.addEventListener("click", () => {
  img.setAttribute("src", "./img/on.jpg");
});
offBut.addEventListener("click", () => {
  img.setAttribute("src", "./img/image.jpg");
});
let _ = "salSSm";
console.log(_);

let x = 5;
let y = 118;
--x;
console.log(x);

console.log(Math.pow(x, y));

let u = "erfan";
console.log(u + x);

let a = BigInt(10);
console.log(a);

let b = { salam: "salma" };
console.log(typeof b);

let text = "The temperature is " + toCelsius(77) + " Celsius";
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(text);





let infoCar = {
  type: "ss",
  model: "",
  color: "",
};
let car = (type, model, color) => {
  infoCar.model = model;
  infoCar.type = type;
  infoCar.color = color;
  return [model, type, color];
};
console.log(car("ferarri", "2020", "red"));

let l = "type";
console.log(infoCar[l]);

delete infoCar.color;
console.log(infoCar);


let person = {
  name: "John",
  age: 30,
  city: "New York"
};
let texT = ""
for (let key in person) {
  texT += person[key] + " ";
}
console.log(texT);



let ppp = {
  name: "John",
  age: 30,
  city: "New York"
}
let uuuu = {
  name: "John",
  age: 30,
  city: "New York"
}
