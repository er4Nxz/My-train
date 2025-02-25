// گرفتن دادهای api
let fetchData = () => {
  console.log(
    fetch("https://fakestoreapi.com/products").then((item) =>
      item.json().then((data) => {
        console.log(data);
      })
    )
  );
};
fetchData();
