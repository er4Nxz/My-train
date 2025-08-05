import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../Redux/Products/ProductsSlice";
import Item from "./Item";
const Index = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {loading ? <div className="spinner-border"></div> : null}
      {error ? <div className="text-red-500  text-4xl">{error}</div> : null}
      <div className="p-5 flex gap-3 flex-wrap flex-row justify-center items-center">
        {products?.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Index;
