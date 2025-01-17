//train of arminpor
{
  let fullName = prompt("ENTER YOUR FULLNAME","MR");
  let AGE = prompt("ENTER YOUR AGE",18);
  let ADDRESS = prompt("ENTER YOUR ADDRESS","tehran");  
  let DEGREE = prompt("ENTER YOUR DEGREE","male"); 
  let FATHER_NAME = prompt("ENTER YOUR FATHER NAME","MR");
  let BIRTH_DAY = prompt("ENTER YOUR BIRTH DAY","00/00/2000");
  document.getElementById("fullName").innerHTML = `${fullName}`;
  document.getElementById("age").innerHTML = `${AGE}`;
  document.getElementById("address").innerHTML = `${ADDRESS}`;
  document.getElementById("degree").innerHTML = `${DEGREE}`;
  document.getElementById("father-name").innerHTML = `${FATHER_NAME}`;
  document.getElementById("birth-day").innerHTML = `${BIRTH_DAY}`;
  console.log(fullName, typeof fullName);
  console.log(AGE, typeof AGE);
  console.log(ADDRESS, typeof ADDRESS);
  console.log(DEGREE, typeof DEGREE);
  console.log(FATHER_NAME, typeof FATHER_NAME);
  console.log(BIRTH_DAY, typeof BIRTH_DAY);
}
