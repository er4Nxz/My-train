import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("/fetch/products", async () => {
  let response = await axios.get(
    "https://685c4d07769de2bf085c58e4.mockapi.io/Product"
  );
  return response.data;
});

export const fetchProductsID = createAsyncThunk(
  "/fetch/productsID/",
  async (id) => {
    let response = await axios.get(
      `https://685c4d07769de2bf085c58e4.mockapi.io/Product/${id}`
    );
    return response.data;
  }
);

const ProductsSlice = createSlice({
  name: "Products",
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
        state.error = "server is error 404";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = true;
        state.error = "server is error 404";
      })
      .addCase(fetchProductsID.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsID.pending, (state) => {
        state.loading = true;
        state.error = "server is error 404";
      })
      .addCase(fetchProductsID.rejected, (state) => {
        state.loading = true;
        state.error = "server is error 404";
      });
  },
});
export default ProductsSlice.reducer;
