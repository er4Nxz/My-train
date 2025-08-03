import { combineReducers } from "redux";
import ProductsReducer from "./Products/ProductsReducer";
const rootReducers = combineReducers({
  products: ProductsReducer
});
export default rootReducers;
