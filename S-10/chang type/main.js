// + - * / % **
x = 18;
document.write(
  `<h1>my age is ${x} and my birth day in ${1403 - x} year in miladi ${
    1403 - x + 621
  }</h1>`
);
// change type string to number
// in js => parseint parsefloat
let age = parseInt(prompt("enter your age"));
console.log(age, typeof age);
// in es => number
let f = Number(prompt("adad bezan"));
console.log(typeof f);
// +
let g = +prompt("ye adad dege bzn");
console.log(typeof g);
// change type number to string
let e = String(age);
console.log(e, typeof e);
// .tostring
let w = prompt("adad tabdil b string").toString();
console.log(w, typeof w);
// change type boolean false => 0 "" null undifiend false
//true => chracter space
let u = "12";
console.log(Boolean(u));
console.log(Boolean(true));

//false => 0 "" null undifiend false
let l = "";
console.log(Boolean(l));
console.log(Boolean(false));
// oprand operator
let k = +prompt("adad aval ?...");
let q = +prompt("adad dovom....?");
let sum = k + q;
console.log(sum);
let sub = k - q;
console.log(sub);
let mul = k * q;
console.log(mul);
let div = k / q;
console.log(div);
let rem = k % q;
console.log(rem);
let pow = k ** q;
console.log(pow);
// -- ++
let v = 20;
let inc = ++v;
console.log(inc, x);
let m = 20;
let dash = --v;
console.log(v);
// asignment
v += m;
console.log(v);
v -= m;
console.log(v, typeof v);
v *= m;
console.log(typeof v);
//compare
{
  let x = 21;
  let y = 20;
  let result = x < y;
  console.log(result);
}
{
  let x = 20;
  let y = 20;
  let result = x <= y;
  console.log(result);
}
{
  let x = 21;
  let y = 20;
  let result = x == y;
  console.log(result);
}
{
  let x = 22;
  let y = 20;
  let result = x != y;
  console.log(result);
}
{
  let x = "20";
  let y = 20;
  let result = x === y;
  console.log(result);
}
{
  let x = "20";
  let y = 20;
  let result = x !== y;
  console.log(result);
  console.log(typeof result);
}

//Polynomial
{
  let x = 20;
  let y = 20;
  //and
  {
    let result = x !== 10 && y == 20 && x == y;
    //           true *     true    *  true
    //           1     *    1     *    1 = 1 =>true
    console.log(result);
  }
  //or
  {
    let result = x === 10 || y !== 20 || x !== y;
    //            false +    false +    false
    //            0       +     0     +   0 = 0 => false
    console.log(result);
  }
  // not
  {
    let result = !(x === 10 || y !== 20 || x !== y);
    //            (false +    false +    false)
    //            (0       +     0     +   0) = !(0) => true
    console.log(result);
  }
}
// & | ^ bit
{
  x = 10;
  y = 15;
  {
    // ^ xor
    result = x ^ y;
    console.log(result);
  }
  {
    // add &
    result = x & y;
    console.log(result);
  }
  {
    // or |
    result = x | y;
    console.log(result);
  }
  {
    // >> left shift
    result = x >> 1
    console.log(result); 
  }
  {
    // << right shift
    result = x<<1
    console.log(result);
    
  }
}
