let mainDiv = document.querySelectorAll(".nor");
let btn = document.querySelector(".btn");
let flag = true;
function darkmode() {
  if (flag) {
    setTimeout(() => {
      btn.innerHTML = "Light Mode";
      btn.classList.add("btnLight");
      mainDiv.forEach((divs) => {
        divs.parentElement.classList.add("bodyDark");
        divs.classList.add("divDark");
        divs.children[1].classList.add("pDark");
        divs.children[2].classList.add("aDark");
      });
      flag = false;
    }, 500);
  } else {
    setTimeout(() => {
      btn.innerHTML = "Dark Mode";
      btn.classList.remove("btnLight");
      mainDiv.forEach((divs) => {
        divs.parentElement.classList.remove("bodyDark");
        divs.classList.remove("divDark");
        divs.children[1].classList.remove("pDark");
        divs.children[2].classList.remove("aDark");
      });
      flag = true;
    }, 500);
  }
}
export default darkmode;
