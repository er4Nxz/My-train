import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Products/ProductsSlice";
const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
export default store;
