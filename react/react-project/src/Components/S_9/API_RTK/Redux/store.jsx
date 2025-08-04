import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Products/ProductSlice";
const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});
export default store;
