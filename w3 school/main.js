// let onBut = document.querySelector(".on");
// let img = document.querySelector(".img");
// let offBut = document.querySelector(".off");
// onBut.addEventListener("click", () => {
//   img.setAttribute("src", "./img/on.jpg");
// });
// offBut.addEventListener("click", () => {
//   img.setAttribute("src", "./img/image.jpg");
// });
// let _ = "salSSm";
// console.log(_);

// let x = 5;
// let y = 118;
// --x;
// console.log(x);

// console.log(Math.pow(x, y));

// let u = "erfan";
// console.log(u + x);

// let a = BigInt(10);
// console.log(a);

// let b = { salam: "salma" };
// console.log(typeof b);

// let text = "The temperature is " + toCelsius(77) + " Celsius";
// function toCelsius(fahrenheit) {
//   return (5 / 9) * (fahrenheit - 32);
// }
// console.log(text);

////یک روش برای انتقال اطلاعات توسط یک تابع به یک ابجکت
// let infoCar = {
//   type: "",
//   model: "",
//   color: "",
// };
// let car = (type, model, color) => {
//   infoCar.model = model;
//   infoCar.type = type;
//   infoCar.color = color;
//   return [model, type, color];
// };
// console.log(car("ferarri", "2020", "red"));
// let l = "type";
// console.log(infoCar[l]);
//// دیلیت کردن یه پروپرتی از یک ابجکت
// delete infoCar.color;
// console.log(infoCar);



////چاپ اطلاعات یک ابجکت توسط یک حلقه با متنی جدید
// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// let texT = ""
// for (let key in person) {
//   texT += person[key] + " ";
// }
// console.log(texT);

//// جستجوی استرینگ توسط match()
// let jamal = "The rain in SPAIN stays mainly in the plain"
// let result = jamal.match(/in/gi)
// console.log(result);


////جستجوی استرینگ توسط matchAll()
// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// let result = text.matchAll(/cats/gi)
// let jamal = Array.from(result)
// console.log(result);


////جستجوی استرینگ توسط includes()
// let text = "Hello world, welcome to the universe."
// let result = text.includes(/ld/)
// console.log(result);


////اضافه کردن دیتا به یک ارایه
// const x = []
// x[2] = "hello"
// console.log(x);
// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// console.log(person);



//// متود concat برای اضافه کردن ارایه به یک ارایه دیگر
// let a = ["erfan"]
// let b = ["sadaf"]
// let c = a.concat(b)
// console.log(c);



//// امتحان کردن متود find
/// اینجوری فقد یه ایتم بهت برمیگردونه و خب چون همچین متودی هست ولی تو فیلتر هرچی ایتم قبل هجده باشه بر میگردونه
// let numbers = [4, 9, 16, 25, 29]
// let a = numbers.find((item)=> item<18)
// console.log(a);



//// تاریخ 
let date = new Date()
console.log(date);
