import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("/products/fetch", async () => {
  const response = await axios.get(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  return response.data;
});

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = true;
      });
  },
});
export default ProductsSlice.reducer;
