import { useState } from "react";
import withAuth from "./hoc/withAuth";
import Home from "./home/Home";
import useFetch from "../CustomHooks/hooks/useFetch";
import withLoading from "./hoc/withLoading";

const HigherOrderComponent = () => {
  const MainComponent = withAuth(withLoading(Home));

  const [isLogin, setIsLogin] = useState(false);

  const [product, loading, error] = useFetch(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  return (
    <>
      <div className="w-[100%] bg-black p-4">
        <button
          className="btn btn-info"
          onClick={() => {
            setIsLogin(!isLogin);
          }}
        >
          {isLogin ? "Log out" : "Log in"}
        </button>
      </div>
      <MainComponent
        isLogin={isLogin}
        product={product}
        loading={loading}
        error={error}
      />
    </>
  );
};

export default HigherOrderComponent;
