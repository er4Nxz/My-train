// گرفتن دادهای api
let fetchData = () => {
  fetch("https://fakestoreapi.com/products").then((item) =>
    console.log(item.json())
  );
};
fetchData()