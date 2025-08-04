import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("/product/fetch", async () => {
  const response = await axios.get(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  return response.data;
});

const ProductSlice = createSlice({
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
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = "Server is Error";
        state.loading = true;
      });
  },
});

export default ProductSlice.reducer;
