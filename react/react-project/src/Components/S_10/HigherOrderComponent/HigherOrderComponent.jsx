import { useState } from "react";
import withAuth from "./hoc/withAuth";
import Home from "./Home/Home";
import useFetch from "../CustomHooks/hooks/useFetch";
import withLoading from "./hoc/withLoading";

const HigherOrderComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [data, loading, error] = useFetch(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );

  const MainComponent = withAuth(withLoading(Home));
  return (
    <>
      <div className="w-[100%] p-3 bg-black">
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
        loading={loading}
        data={data}
        error={error}
      />
    </>
  );
};

export default HigherOrderComponent;
