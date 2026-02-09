// select html tag (tagname)
// let div = document.getElementsByTagName("div")
// console.log(document.getElementsByTagName("div"));

// css with js

// let div = document.getElementsByTagName("div")
// console.log(div);

// div[1].style.backgroundColor="#2b2b2b"
// div[1].style.width="30%"
// div[1].style.height="400px"
// div[1].style.margin="50px auto"
// div[1].style.padding="30px"
// div[1].style.boxSizing="borderbox"
// div[1].style.color="whitesmoke"

// TRAIN
// let div = document.getElementsByClassName("div")
// div[0].style.backgroundColor="#2b2b2b"
// div[1].style.backgroundColor="aqua"
// div[2].style.backgroundColor="#33efc4"

//css with iterator
// let div = document.getElementsByTagName("div")
// console.log(div);

// for (let i = 0; i < div.length; i++){
//     div[i].style.backgroundColor="#2b2b2b"
//     div[i].style.width="30%"
//     div[i].style.height="auto"
//     div[i].style.margin="50px auto"
//     div[i].style.padding="30px"
//     div[i].style.boxSizing="borderbox"
//     div[i].style.color="whitesmoke"
// }

// html tag cast to array
// let div = [...document.getElementsByTagName("div")];
// console.log(div);
// div.forEach((item) => {
//   item.style.backgroundColor = "#7f7f7f";
//   item.style.width = "30%";
//   item.style.height = "auto";
//   item.style.margin = "50px auto";
//   item.style.padding = "30px";
//   item.style.boxSizing = "borderbox";
//   item.style.color = "whitesmoke";
// });

// select html tag (queryselectorAll)
// let div = document.querySelectorAll("div#d")
// console.log(div);
// div.forEach((item)=>{
//     item.style.backgroundColor="#2b2b2b"
//     item.style.width = "30%";
//   item.style.height = "auto";
//   item.style.margin = "50px auto";
//   item.style.padding = "30px";
//   item.style.boxSizing = "borderbox";
//   item.style.color = "whitesmoke";
// })

// Calling children
// let divParent = document.querySelectorAll(".parent");
// console.log(divParent);
// divParent.forEach((item) => {
//     item.style.backgroundColor = "#7b7b7b",
//     //Tag information using node list
//     console.log(item.attributes, item.childElementCount, item.childNodes,item.children);
//     // (children=>array)
//   Array.from(item.children).forEach((childOfItem) => {
//     childOfItem.style.padding = "20px";
//     childOfItem.style.color = "white";
//     childOfItem.style.textAlign = "center";
//     childOfItem.style.display = "block";
//   });
//   // (childrenode)
//   item.childNodes.forEach((childNodes) => {
//     childNodes.style.fontSize = "30px ";
//   });
//   //Calling the childe alone
//   item.children[0].style.color = "crimson";
//   item.childNodes[1].style.fontSize = "14px";
//   item.children[2].style.fontSize = "20px";
//   //classlist
// //   item.children[item.children.length-1].classList.add("btn");
//   // اینجوریم میشه خودم کشفش کردم
//   item.lastChild.classList.add("btn")
// });

// dataset api
// let product = document.querySelector(".product");
// // صدا زدن dataset و محتوای داخل تگ
// console.log(
//   product.dataset.discount,
//   typeof product.dataset.discount,
//   product.textContent
// );
// if ((product.children[0].nodeName = "H1")) {
//   price = +product.children[0].textContent;
// }
// if (product.children[1].classList.contains("discount")) {
//   discount = parseInt(product.dataset.discount);
//   calc = price - (price * discount) / 100;
//   product.children[1].textContent = calc + " %";
// }
