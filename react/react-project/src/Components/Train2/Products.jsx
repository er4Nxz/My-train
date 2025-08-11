import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./Redux/products/ProductsSlice";
import { useEffect } from "react";
const Products = () => {
  const dispath = useDispatch();

  const { products, loading, error } = useSelector((state) => state.Products);

  useEffect(() => {
    dispath(fetchProducts());
  }, []);

  return (
    <>
      <div className="w-[100%] p-5 flex ">
        <div className="w-[40%]">
          {products?.map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
