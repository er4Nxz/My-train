import { useContext } from "react";
import { MyContext } from "./ReducerContext";

const Context = () => {
  const { counter, dispatch } = useContext(MyContext);
  return (
    <div className="w-1/4 bg-accent-content p-2 mx-auto  rounded-2xl mt-2">
      <h2 className="text-white">Counter : {counter.count}</h2>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch({ type: "+", payload: 1 });
        }}
      >
        +
      </button>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch({ type: "-", payload: 1 });
        }}
        disabled={counter.count == 0 ? "disable" : null}
      >
        -
      </button>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <button
        className="btn btn-sm btn-accent bg-white mx-2"
        onClick={() => {
          dispatch({ type: "+", payload: 5 });
        }}
      >
        +5
      </button>
    </div>
  );
};

export default Context;
