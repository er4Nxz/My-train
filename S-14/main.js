import darkmode from "./darkMode.js";
// darkmode
let btn = document.querySelector(".btn");

btn.addEventListener("click", darkmode);

// restprom
// let data = ["erfan", "ahmadi", "hassan", 18, "e@e.com"];
// let [firstName, lastName, fatherName, age, email] = data;
// console.log(firstName, lastName, fatherName, age, email);

// ...rest
// let data = ["erfan", "ahmadi", "hassan", 18, "e@e.com"];
// let [firstName, lastName, ...res] = data;
// console.log(firstName,lastName,res);
// res.forEach((lala)=>{
//     console.log(lala);
// })

// ...rest in function
// function rest(...args){
//     console.log(args);
// }
// rest(1,2,3,4,5,6,7,8,9,10)

// ...rest in object
// let obj = {
//     name: "erfan",
//     age: 18,
//     lastName: "ahmadi"
// }
// let {name, ...rest} = obj;
// console.log(name,rest);

// add data to object
// let obj = {
//   name: "erfan",
//   age: 18,
// };
// obj.lastName = "ahmadi";
// obj.fatherName = "hassan";
// console.log(obj);

// class object entries
// let obj = {
//     name: "erfan",
//     age: 18,
//     lastName: "ahmadi"
// }
// console.log(Object.entries(obj));

// let div = document.querySelector("#aval");
// div.addEventListener("click", () => {
//   // content editable
//   div.contentEditable = true;
//   //getComputStyle
//   console.log(getComputedStyle(div).color);
//   console.log(getComputedStyle(div).backgroundColor);
//   // setComputStyle
//   div.style.backgroundColor = "red";
//   // setAttribute
//   div.setAttribute("data-id", "salma");
//   console.log(div.dataset.id);
//   // isConnected / append
//   let text = "salam"
//   let h1 = document.createElement("h1")
//   h1.insertAdjacentText("beforeend", text);
//   div.append(h1)
//   if (h1.isConnected === true) {
//     console.log("ok");
//   } else {
//     console.log("not ok");
//   }
// });
