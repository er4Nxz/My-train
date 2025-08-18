import useFetch from "../CustomHooks/hooks/useFetch";
import withLoading from "./hoc/withLoading";
import Products from "./Products/Products";
const HOC = () => {
  const [product, loading, error] = useFetch(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  const MainComponent = withLoading(Products);
  return (
    <>
      <MainComponent loading={loading} product={product} error={error} />
    </>
  );
};

export default HOC;
