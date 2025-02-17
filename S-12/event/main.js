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

// add class by click / class name / mouseenter / mouseleve /mouse down
// let btn = document.querySelector(".btn");
// let f = document.querySelector(".f")
// f.classList.remove("f")
// btn.addEventListener("click",function(){
//     f.className="f"
// })
// f.addEventListener("mouseenter",function(){
//     f.classList.add("e")
//     f.classList.remove("w")
// })
// f.addEventListener("mouseleave",function(){
//     f.classList.add("w")
// })
// f.addEventListener("mousedown",function(){
//     this.classList.remove("f")
//     this.classList.remove("w")
//     this.classList.remove("e")
// })

//menu
// let parentSubMenu = document.querySelector(".parentSubMenu")
// let subMenu = document.querySelector("#subMenu")
// /* مدل خودم
// parentSubMenu.addEventListener("mouseenter",function(){
//     subMenu.classList.add("subMenu")
// })
// parentSubMenu.addEventListener("mouseleave",function(){
//     subMenu.classList.remove("subMenu")
// })
// */
// /* مدل ارمین پور ک گفته نود نیم بچشو گیر بیار اگر داشت بهش همچین کلاسی رو بده
// parentSubMenu.addEventListener("mouseenter",function(e){
//     [...e.target.children].forEach((elem)=>{
//         if(elem.nodeName.toLowerCase()==="div"){
//             elem.classList.add("subMenu")
//         }
//     })
// })*/

//رفتو برگشت یک کلیک
let click = document.querySelector("#click");
let modal = document.querySelector("#modal");
let flag = true;
click.addEventListener("click", function () {
  if (flag) {
    modal.classList.remove("modal2");
    modal.classList.add("modal3");
    flag = false;
  } else {
    modal.classList.remove("modal3");
    modal.classList.add("modal2");
    flag = true;
  }
});
