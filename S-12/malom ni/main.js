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
var laptop = {
    name: "lenovo",
    price: 5000,
    color: "black",
    isAvailable: true,
    Available: function () {
        if (this.isAvailable === true) {
            return "".concat(this.name, "-").concat(this.price, "-").concat(this.color, " is available");
        }
        else {
            return "".concat(this.name, "-").concat(this.price, "-").concat(this.color, " is not available");
        }
    },
    discount: function (discount) {
        return this.price - (discount / 100) * this.price;
    }
};
