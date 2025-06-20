import React, { useReducer } from "react";
import Context from "./Context";
export const MyContext = React.createContext();
const initalState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { count: state.count + action.payload };
    case "-":
      return { count: state.count - action.payload };
    case "reset":
      return initalState;
    case "+5":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
const ReducerContext = () => {
  const [counter, dispatch] = useReducer(reducer, initalState);
  return (
    <MyContext.Provider value={{ counter, dispatch }}>
      <Context />
    </MyContext.Provider>
  );
};

export default ReducerContext;
