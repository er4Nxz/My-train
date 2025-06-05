// alert on =>onclick (function)
// function callData(){
//     alert("Hello, World!");
// }

// method onclick
// let btn  = document.querySelector(".btn");
// btn.onclick = function callData(){
//     alert("Hello, World!");
// }

// call onclick new method
// let btn = document.querySelector(".btn");
// btn.addEventListener("click",function(){
//     alert("Hello, World!");
// })

// add class by click / class name / mouseenter / mouseleve /mouse down / mouseup
// let btn = document.querySelector(".btn");
// let f = document.querySelector(".f");
// flag = true;
// f.classList.remove("f");
// btn.addEventListener("click", function () {
//   f.className = "f";
// });
// f.addEventListener("mouseenter", function () {
//   f.classList.add("e");
//   f.classList.remove("w");
// });
// f.addEventListener("mouseleave", function () {
//   f.classList.add("w");
//   f.classList.remove("e")
// });
// f.addEventListener("mousedown",function(){
//     this.classList.remove("f")
//     this.classList.remove("w")
//     this.classList.remove("e")
// })
// f.addEventListener("mouseup", function () {
//   f.classList.remove("t");
// });

//menu
// let parentSubMenu = document.querySelector(".parentSubMenu");
// let subMenu = document.querySelector("#subMenu");
// مدلم خودم
// parentSubMenu.addEventListener("mouseenter",function(){
//     subMenu.classList.add("subMenu")
//     subMenu.parentElement.parentElement.parentElement.parentElement.classList.add("back")
// })
// parentSubMenu.addEventListener("mouseleave",function(){
//     subMenu.classList.remove("subMenu")
//     subMenu.parentElement.parentElement.parentElement.parentElement.classList.remove("back")
// })
// مدل ارمین پور ک گفته نود نیم بچشو گیر بیار اگر داشت بهش همچین کلاسی رو بده
// parentSubMenu.addEventListener("mouseenter", function (e) {
//   [...e.target.children].forEach((elem) => {
//     if (elem.nodeName.toLowerCase() === "div") {
//       elem.classList.add("subMenu");
//     }
//   });
// });

// menu slider / Multifunctional / replace
// let click = document.querySelector("#click");
// let modal = document.querySelector("#modal");
// let flag = true;
// click.addEventListener("click", function () {
//   if (flag) {
//     modal.classList.replace("modal2","modal3")
//     click.children[0].innerHTML = "&#10060"
//     flag = false;
//   } else {
//     modal.classList.replace("modal3","modal2")
//     click.children[0].innerHTML = "&#9776;"
//     flag = true;
//   }
// });

//restprom
// function data(...rest){
//   rest.forEach(item=>{
//     console.log(item)
//   })
// }
// data("erfan"," ahmadi"," 18")

//mouse move
let move = document.querySelector("#c");
move.addEventListener("mousemove", function (e) {
  // حرکت کردن عنصر
  e.target.parentElement.style.left = `${e.offsetX}px`;
  e.target.parentElement.style.top = `${e.offsetY}px`;
  //   عوض شدن رنگ صفحه
  e.target.parentElement.parentElement.style.background = `rgb(${
    e.offsetX / 2 + 50
  },${e.offsetY / 2 + 50},${e.offsetX / 5 + e.offsetX})`;
});

// keyup / keydown / keypress
// let key = document.querySelector("#key");
// let text = document.querySelector("#text");
// key.addEventListener("keydown", function (e) {
//     console.log(e.target.value);
// })
// key.addEventListener("keyup",function(e){
//     text.innerText = e.target.value
//     if(e.key === "t"){
//         text.style.color = "red"
//     }else if(e.key === "T"){
//         text.style.color = "blue"
//     }
// })

// createlement /
// let mainDiv = document.querySelector("#mainDiv")
// let creatH1 = document.createElement("h1")
// creatH1.innerText = "Hello World"
// creatH1.className = "titr"
// // prepend
// mainDiv.prepend(creatH1)
// // append
// let buy = document.createElement("a")
// buy.href = "#"
// buy.id = "buy"
// buy.textContent = "Buy"
// mainDiv.append(buy)
// insert element
// let prog = document.createElement("p")
// prog.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, non!"
// prog.className = "prog"
// mainDiv.insertAdjacentElement("beforeend",prog)

// close element
// let ppp = document.querySelector("#ppp")
// let span = document.createElement("span")
// span.className = "close"
// span.innerHTML = "&#10060"
// ppp.insertAdjacentElement("afterbegin",span)
// span.addEventListener("click",function(){
//     ppp.remove()
// })

// settimeout / setinterval
// setTimeout(()=>{
//     document.body.insertAdjacentHTML("beforeend","<h1>erfan is the best</h1>")
// },2000)
// setInterval(()=>{
//     document.body.insertAdjacentHTML("beforeend","<h1>erfan is the best</h1>")
// },2000)

// clearInterval
// let start = document.querySelector("#start");
// let stop = document.querySelector("#stop");
// let mainDiv = document.querySelector("#mainDiv");
// start.addEventListener("click", function () {
//   timer = setInterval(() => {
//     mainDiv.insertAdjacentHTML("beforeend", "<h1>erfan is the best</h1>");
//   }, 1000);
// });
// stop.addEventListener("click", function () {
//   clearInterval(timer);
// });

// show elem
// let show = document.querySelector("#show");
// let parent = document.querySelector(".parent");
// let closeParent = document.querySelector(".closeParent");
// show.addEventListener("click", function () {
//   {
//     parent.classList.add("block");
//     parent.classList.remove("none");
//   }
//   {
//     closeParent.addEventListener("click", function () {
//       this.parentElement.classList.add("none");
//       this.parentElement.classList.remove("block");
//     });
//   }
// });

// call back syncronize
// let laptop = [
//   { brand: "msi", price: 3000 },
//   { brand: "dell", price: 3500 },
//   { brand: "mac", price: 4000 },
// ];
// function create() {
//   setTimeout((CB) => {
//     laptop.push({
//       brand: "lenovo",
//       price: 2500,
//     });
//     // یعنی اینکه میاد اون ورودی رو که ما داخل فانکشن گزاشتیم بصورت یک فانکشن میاد داخل فانکشن اصلی اجرا میکنه
//     CB()
//   }, 1000);
// }
// function show() {
//   console.log(laptop[0]);
// }
// create(show)

// promise (ecma)
let laptop = [
  { brand: "msi", price: 3000 },
  { brand: "dell", price: 3500 },
  { brand: "mac", price: 4000 },
];
function create(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      laptop.push({
        brand: "lenovo",
        price: 2500,
      });
      let flag = true;
      if (flag) {
        resolve(callback());
      } else {
        reject("من نمیتونم مشخصات شمارو اضافه کنم");
      }
    }, 1000);
  });
}
function show() {
  return laptop
}
create(show)
  .then((resolve) => {
    let x = resolve.filter((item)=> item.price >= 3500)
    console.log(x);
  })
.catch((reject) => console.log(reject));

// async awit
// let laptop = [
//   { brand: "msi", price: 3000 },
//   { brand: "dell", price: 3500 },
//   { brand: "mac", price: 4000 },
// ];
// function create(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       laptop.push({
//         brand: "lenovo",
//         price: 2500,
//       });
//       let flag = true;
//       if (flag) {
//         resolve(callback());
//       } else {
//         reject("من نمیتونم مشخصات شمارو اضافه کنم");
//       }
//     }, 2000);
//   });
// }
// function show() {
//   console.log(laptop);
// }
// function deleteLapatop(callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       laptop.pop();
//       let flag = true;
//       if (flag) {
//         resolve(callback());
//       } else {
//         reject("من نمیتونم مشخصات شمارو حذف کنم");
//       }
//     }, 1000);
//   });
// }
// async function result() {
//   await create(show)
//   await deleteLapatop(show)
// }
// result();

//example promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           const success = true; // فرض کنیم عملیات همیشه موفق است
//           if (success) {
//               resolve(["داده ۱", "داده ۲", "داده ۳"]); // داده‌های شبیه‌سازی شده
//           } else {
//               reject("خطا در بارگذاری داده‌ها.");
//           }
//       }, 2000); // شبیه‌سازی تأخیر ۲ ثانیه‌ای
//   });
// }
// // اضافه کردن رویداد کلیک به دکمه
// document.getElementById("loadDataBtn").addEventListener("click", () => {
//   const resultDiv = document.getElementById("result");
//   resultDiv.innerHTML = "در حال بارگذاری..."; // نمایش پیام بارگذاری
//   fetchData()
//       .then((data) => {
//           resultDiv.innerHTML = data; // نمایش داده‌ها
//       })
//       .catch((error) => {
//           resultDiv.innerHTML = error; // نمایش خطا
//       });
// });
