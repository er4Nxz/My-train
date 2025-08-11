import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsID } from "../../../Redux/ProductsSlice";
import Update from "./Update";
const Edit = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProductsID(id));
  }, []);
  return (
    <>
      {products && <Update products={products} loading={loading} error={error} />}
    </>
  );
};

export default Edit;
