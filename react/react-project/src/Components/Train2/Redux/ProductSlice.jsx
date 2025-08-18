import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("/fetch/product", async () => {
  const response = await axios.get(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  return response.data;
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = "Server Error ...!";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.error = "Server Error ...!";
        state.loading = true;
      });
  },
});

export default ProductSlice.reducer;
