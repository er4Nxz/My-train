import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/ProductSlice";

const Products = () => {
  const { product, loading, error } = useSelector((state) => state.product);
  console.log(product);
  console.log(loading);
  console.log(error + "5");
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchProduct());
  }, []);

  return <></>;
};

export default Products;
