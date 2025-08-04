import { Provider } from "react-redux";
import store from "./Redux/store";
import Products from "./Products/Products";
const API_RTK = () => {
  return (
    <>
      <Provider store={store}>
        <Products />
      </Provider>
    </>
  );
};

export default API_RTK;
