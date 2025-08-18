import { Provider } from "react-redux";
import store from "./redux/store";
import Products from "./Products/Products";
const Train2 = () => {
  return (
    <>
      <Provider store={store}>
        <Products />
      </Provider>
    </>
  );
};

export default Train2;
