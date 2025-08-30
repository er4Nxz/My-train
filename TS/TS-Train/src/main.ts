// // array 2D
// let user: [[string, number], [string, number]] = [
//   ["admin", 1],
//   ["user", 2],
// ];
// user.map((item) => {
//   item.map((item2) => {
//     console.log(item2);
//   });
// });

// // output and parametr types
// function isLogin(username: string, password: string): boolean {
//   if (username === "admin" && password === "admin") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isLogin("admin", "admin"));

// // union type
// let test: number | string = 12;
// console.log(test);

// // literal type
// let age : 18 = 18
// age = 20
// console.log(age);

// // template riteral type
// function setCssProperty(param: `${number}px` | `${number}%` | `${number}rem`) {
//   return param;
// }
// console.log(setCssProperty("12px"));
// console.log(setCssProperty("100%"));
// console.log(setCssProperty("3rem"));
// console.log(setCssProperty("1rx"));
