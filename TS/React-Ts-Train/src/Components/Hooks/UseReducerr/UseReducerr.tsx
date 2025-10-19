import { useReducer } from "react";

type StateType = {
  count: number;
};
type Reset = {
  type: "reset";
};
type IncDec = {
  type: "inc" | "dec";
  payload: number;
};
type ActionType = IncDec | Reset;
const initialState = {
  count: 0,
};
const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "inc": {
      return { count: state.count + action.payload };
    }
    case "dec": {
      return { count: state.count - action.payload };
    }
    case "reset": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

const UseReducerr = () => {
  const [state, dispath] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispath({ type: "inc", payload: 1 })}>inc</button>
      <button onClick={() => dispath({ type: "dec", payload: 1 })}>dec</button>
      <button onClick={() => dispath({ type: "reset" })}>reset</button>
    </>
  );
};

export default UseReducerr;
