import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(URL);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [fetchProducts.pending]: () => console.log("pending"),
    [fetchProducts.fulfilled]: (state, { payload }) => {
      console.log("fetch successfully");
      return { ...state, products: payload };
    },
    [fetchProducts.rejected]: () => console.log("pending"),
  },
});

export const getAllProducts = (state) => state.products.products;
export default productsSlice.reducer;
