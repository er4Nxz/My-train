import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, useParams } from "react-router-dom";
import { fetchProductsID } from "../../../Redux/Products/ProductsSlice";
import Update from "./Update";
const Edit = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProductsID(id));
  });
  return (
    <>{data && <Update product={product} loading={loading} error={error} />}</>
  );
};

export default Edit;
