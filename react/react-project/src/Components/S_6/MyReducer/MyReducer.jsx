import { useReducer } from "react";
const initalState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "reset":
      return initalState;
    case "+5":
      return state + 5;
    default:
      return state;
  }
};
const MyReducer = () => {
  const [counter, dispatch] = useReducer(reducer, initalState);
  return (
    <div className="w-1/4 bg-accent-content p-2 mx-auto  rounded-2xl mt-2">
      <h2 className="text-white">Counter : {counter}</h2>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch("+");
        }}
      >
        +
      </button>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch("-");
        }}
        disabled={counter == 0 ? "disable" : null}
      >
        -
      </button>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch("reset");
        }}
      >
        Reset
      </button>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch("+5");
        }}
      >
        +5
      </button>
    </div>
  );
};

export default MyReducer;
