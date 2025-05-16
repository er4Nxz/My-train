// explicite
// let item = x => x
// console.log(item(10));

//spread operator
// let item = [1,2,3,4,5]
// let  item2 = [...item]
// console.log(item2);

// destructuring
// let data = ["erfan","ahmadi",18]
// let [name,lastname,age] = data
// console.log(name,lastname,age);

// restprom
// let data = [1,2,3,4,5]
// let [first,...rest] = data
// console.log(first,rest);

// callback
// let z = [10, 20, 30];
// let x = (callback) => {
//   setTimeout(() => {
//     z.push(40);
//     callback();
//   }, 2000);
// };
// let y = () => {
//   console.log(z);

// };
// x(y)

//promise
// let x = [10, 20, 30];
// let y = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     x.push(40)
//     let flag = true;
//     if (flag) {
//       resolve(callback());
//     } else {
//       reject("not ok");
//     }
//   }, 1000);
// });
// let callback = () => {
//   return x
// };
// y.then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})

// api with promise 
// let fetchP = async () => {
//   let response = await fetch(" https://api.escuelajs.co/api/v1/products");
//   return new Promise((resolve, reject) => {
//     if (response.status === 200) {
//       resolve(response.json());
//     } else {
//       reject(`erorr : ${response.statusText}`);
//     }
//   });
// };
// fetchP().then((res)=>console.log(res))
// .catch((err)=>console.log(err))

