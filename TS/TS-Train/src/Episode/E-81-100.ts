// // utility Type
// // Required
// type Type1 = {
//     username:string
//     age?:number
// }
// const var1:Type1 = {username:"erfan"}
// type Type2 = Required<Type1>
// const var2:Type2 = {username:"erfan",age:18}
// // Read only
//  type Type1 = {
//     username:string
//     age?:number
// }
// const var1:Type1 = {username:"erfan"}
// var1.username = "ali"
// console.log(var1.username);
// type Type2 = Readonly<Type1>
// const var2:Type2 = {username:"erfan"}
// var2.username = "ali" // ERROR
// // partial
//  type Type1 = {
//     username:string
//     age:number
// }
// type Type2 = Partial<Type1>
// const var1:Type2 = {}
// // pick
//  type Type1 = {
//     username:string
//     email:string
//     age:number
// }
// type Type2 = Pick<Type1,"age" | "username">
// const var1:Type2 = {username:"erfan",age:23}
// // 