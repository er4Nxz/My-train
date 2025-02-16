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


// add class by click
let btn = document.querySelector(".btn");
let f = document.querySelector(".f")
f.classList.remove("f")
btn.addEventListener("click",function(){
    f.className="f"
})  