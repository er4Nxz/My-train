import { useDispatch, useSelector } from "react-redux";
import {
  incFuncCounter,
  decFuncCounter,
  resetFuncCounter,
} from "../Redux/Counter/CounterAction";
const Counter = () => {
  const counter = useSelector((state) => state.Counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-1/4 bg-accent-content p-2 mx-auto  rounded-2xl mt-2">
        <h2 className="text-white">Counter : {counter}</h2>
        <button
          className="btn btn-sm btn-accent bg-white mx-2"
          onClick={() => {
            dispatch(incFuncCounter());
          }}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-accent bg-white mx-2"
          onClick={() => {
            dispatch(decFuncCounter());
          }}
          disabled={counter == 0 ? "disable" : null}
        >
          -
        </button>
        <button
          className="btn btn-sm btn-accent bg-white mx-2"
          onClick={() => {
            dispatch(resetFuncCounter());
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
