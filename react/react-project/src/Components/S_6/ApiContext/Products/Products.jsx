import { useContext } from "react";
import { MyContext } from "../ApiContext";
import Product from "./Product";

const Products = () => {
  const { products, loading, error } = useContext(MyContext);
  return (
    <div className="w-290 p-3 mt-1 rounded-2xl mx-auto">
      {loading ? (
        <span className="spinner-border spinner-border-sm"></span>
      ) : null}
      {error ? <h3>{error}</h3> : null}
      <div className="row justify-content-center gap-2">
        {products?.map((item) => {
          return <Product Product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
