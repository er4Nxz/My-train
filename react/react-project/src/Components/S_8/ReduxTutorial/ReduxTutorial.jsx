import { Provider } from "react-redux";
import store from "./Redux/store";
import Counter from "./Counter/Counter";
import Age from "./Age/Age";
const ReduxTutorial = () => {
  return (
    <>
      <h1>Redux Tutorial</h1>
      <Provider store={store}>
        <Counter />
        <Age />
      </Provider>
    </>
  );
};

export default ReduxTutorial;
