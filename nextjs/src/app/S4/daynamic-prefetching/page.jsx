import Link from "next/link";

const fetchProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};
const DaynamicPrefetching = async () => {
  const products = await fetchProducts();
  return (
    <>
      {products?.map((item) => {
        return (
          <div className="product">
            <img src="${item.image}" />
            <h2>
              Name:{" "}
              <span>
                <Link href={`/S4/daynamic-prefetching/${item.id}`}>
                  ${item.title}
                </Link>
              </span>
            </h2>
            <h4>
              Price: <span>${item.price} $</span>
            </h4>
            <details>
              <summary>description</summary>
              <p>${item.description}</p>
            </details>
            <div className="rate">
              <h5>
                Rate: <span>${item.rating.rate}</span>
              </h5>
              <h5>
                count: <span>${item.rating.count}</span>
              </h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DaynamicPrefetching;
