import { decCounter, incCounter, resetCounter } from "./CounterAction";
let initalState = {
  count: 0,
};
const CounterReducer = (state = initalState, action) => {
  switch (action.type) {
    case incCounter: {
      return { ...state, count: state.count + action.payload };
    }
    case decCounter: {
      return { ...state, count: state.count - action.payload };
    }
    case resetCounter: {
      return { ...state, count: 0 };
    }
    default: {
      return state;
    }
  }
};

export default CounterReducer;
