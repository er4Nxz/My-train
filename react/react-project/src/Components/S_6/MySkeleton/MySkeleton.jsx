import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
const MySkeleton = () => {
  const [product, setProduct] = useState(null);
  const fetchPro = async () => {
    try {
      let res = await axios("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchPro();
  }, []);
  return (
    <div className="col-12">
      <div className="row justify-content-center gap-10">
        {product?.map((item) => {
          return <Product pro={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default MySkeleton;
