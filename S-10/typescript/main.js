// {
// //casting in ts
//   let x: number = Number(prompt("enter your age"));
//   console.log(typeof x, x);
//   let y: string | null = prompt("fullName");
//   console.log(typeof y, y);
//   let test = String(x);
//   console.log(typeof test, test);
//   let test_2 = Number(y);
//   console.log(test_2);
// }
debugger;
var username = prompt("username");
var password = Number(prompt("pass"));
if ((username === "erfan")) {
    console.log("this username ".concat(username, " its all right"));
    if ((password === 12345)) {
        console.log("WELCOM!");
    }
    else {
        console.log("pass is incorect");
    }
}
else {
    console.log("username is incorect");
    if (password === 12345) {
        console.log("pass is correct");
    }
    else {
        console.log("get out of my web site");
    }
}
