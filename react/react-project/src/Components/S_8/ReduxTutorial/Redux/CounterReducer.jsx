import { dec, inc, reset } from "./CounterAction";
let initalState = {
  count: 0,
};
const CounterReducer = (state = initalState, action) => {
  switch (action.type) {
    case inc: {
      return { ...state, count: state.count + 1 };
    }
    case dec: {
      return { ...state, count: state.count - 1 };
    }
    case reset: {
      return { ...state, count: 0 };
    }
    default: {
      return state;
    } 
  }
};

export default CounterReducer;
