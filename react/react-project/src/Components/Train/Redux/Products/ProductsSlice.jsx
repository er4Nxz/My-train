import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("/product/fetch", async () => {
  const response = await axios.get(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  return response.data;
});
export const fetchProductsID = createAsyncThunk(
  "/productID/fetch",
  async (id) => {
    const response = await axios.get(
      `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${id}`
    );
    return response.data;
  }
);
const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
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
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = true;
        state.error = "server is error";
      })
      .addCase(fetchProductsID.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsID.rejected, (state) => {
        state.loading = true;
        state.error = "server is error";
      });
  },
});
export default ProductsSlice.reducer;
