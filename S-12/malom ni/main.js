// Composition array object
// let person: any[] = [
//   {
//     name: "John",
//     age: 30,
//     city: "New York",
//     isMarrid: true,
//   },
//   {
//     name: "Jane",
//     age: 25,
//     city: "Los Angeles",
//     isMarrid: false,
//   },
//   {
//     name: "Bob",
//     age: 40,
//     city: "Chicago",
//     isMarrid: true,
//   },
// ];
// let result:any=person.filter((item)=> item.age>=30 && item.isMarrid===true)
// console.log(result);
// function in object/this (example)
// let laptop = {
//   name: "lenovo",
//   price: 5000,
//   color: "black",
//   isAvailable: true,
//   Available() {
//     if (this.isAvailable === true) {
//       return `${this.name}-${this.price}-${this.color} is available`;
//     } else {
//       return `${this.name}-${this.price}-${this.color} is not available`;
//     }
//   },
//   discount(discount: number) {
//     return this.price - (discount / 100) * this.price;
//   },
// };
// console.log(laptop.discount(10));
// console.log(laptop.Available());
