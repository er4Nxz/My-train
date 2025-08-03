import { useDispatch, useSelector } from "react-redux";
import { dec, inc, reset } from "../Redux/Counter/CounterSlice";
const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(inc(1))} className="btn btn-accent">
        +
      </button>
      <button onClick={() => dispatch(dec(1))} className="btn btn-accent">
        -
      </button>
      <button onClick={() => dispatch(reset(0))} className="btn btn-accent">
        reset
      </button>
    </>
  );
};

export default Counter;
