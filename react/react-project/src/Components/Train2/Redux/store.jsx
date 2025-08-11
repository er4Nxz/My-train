import { configureStore} from "@reduxjs/toolkit";

import ProductsSlice from "./products/ProductsSlice"

const store = configureStore({
    reducer:{
        Products:ProductsSlice
    }
})
export default store;