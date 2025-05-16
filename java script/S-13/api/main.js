
// گرفتن دادهای api
// let fetchData1 = () => {
//   fetch("https://fakestoreapi.com/products")
//   .then((res) =>res.json().then((data)=>console.log(data)
//   ));
// };
// fetchData1();

// گزاشتن دیتا API داخل المنت های html
let fetchData = async () => {
  let linkApi = await fetch("https://fakestoreapi.com/products");;
  let data = await linkApi.json();
  let products = data.map((item) => {
    return `<div class="product">
        <img src="${item.image}">
        <h2>Name: <span>${item.title}</span></h2>
        <h4>Price: <span>${item.price} $</span></h4>
        <details>
        <summary>description</summary>
        <p>${item.description}</p>
        </details>
        <div class="rate">
            <h5>Rate: <span>${item.rating.rate}</span></h5>
            <h5>count: <span>${item.rating.count}</span></h5>
        </div>
      </div>`;
  });
  document.querySelector(".main").insertAdjacentHTML("afterbegin",products.join(""))
};
fetchData()