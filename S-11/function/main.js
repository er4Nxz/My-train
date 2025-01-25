// functional
prinData();
function prinData() {
  for (let t = 1; t <= 10; t++) {
    for (let i = 1; i <= 10; i++) {
      document.write(`<h1>${i}-hello-world!</h1>`);
    }
    document.write("<hr/>");
  }
}

