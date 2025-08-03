import { Provider } from "react-redux";
import store from "./Redux/store";
import Counter from "./Counter/Counter";

const MyRTK = () => {
  return (
    <>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default MyRTK;
