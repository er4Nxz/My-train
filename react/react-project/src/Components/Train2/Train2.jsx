import { Provider } from "react-redux";
import store from "./Redux/store";
import Products from "./Products";
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
