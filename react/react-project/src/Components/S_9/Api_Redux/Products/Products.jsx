import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Item from "./Item";
import { fetchProducts } from "../Redux/Products/ProductsAction";

const Products = () => {
  const { error, loading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      {loading ? (
        <span className="spinner-border spinner-border-sm"></span>
      ) : null}
      {error ? <h2 className="text-danger">{error}</h2> : null}
      <div className="w-1/2 bg-amber-100 p-3 mt-2 mx-auto rounded-2xl flex flex-row flex-wrap">
        {products?.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Products;
