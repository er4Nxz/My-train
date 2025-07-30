import { Provider } from "react-redux";
import store from "./Redux/store";
import Products from "./Products/Products";
const Api_Redux = () => {
  return (
    <>
      <Provider store={store}>
        <Products />
      </Provider>
    </>
  );
};

export default Api_Redux;
