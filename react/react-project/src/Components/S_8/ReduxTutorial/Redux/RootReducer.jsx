import { combineReducers } from "redux";
import AgeReducer from "./Age/AgeReducer";
import CounterReducer from "./Counter/CounterReducer";
const rootReducer = combineReducers({
    Counter : CounterReducer,
    Age:AgeReducer
})
export default rootReducer