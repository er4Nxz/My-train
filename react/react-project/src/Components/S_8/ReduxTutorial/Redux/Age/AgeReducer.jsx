import { incAge, decAge, resetAge } from "./AgeAction";
const initalState = {
  Age: 18,
};
const AgeReducer = (state = initalState, action) => {
  switch (action.type) {
    case incAge: {
      return { ...state, Age: state.Age + action.payload };
    }
    case decAge: {
      return { ...state, Age: state.Age + action.payload };
    }
    case resetAge: {
      return { ...state, Age: 18 };
    }
    default: {
      return state;
    }
  }
};
export default AgeReducer;
