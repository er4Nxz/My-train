import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../redux/ProductSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
export default store;
