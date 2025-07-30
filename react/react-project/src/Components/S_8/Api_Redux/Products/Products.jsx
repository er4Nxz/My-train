import { useDispatch, useSelector } from "react-redux";
import {
  setError,
  setLoading,
  setProducts,
} from "../Redux/Products/ProductsAction";
import axios from "axios";
import { useEffect } from "react";
import Item from "./Item";

const Products = () => {
  const { error, loading, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      let response = await axios.get(
        "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
      );
      dispatch(setProducts(response.data));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    fetchProducts();
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
