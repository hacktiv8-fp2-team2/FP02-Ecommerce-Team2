import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

const initialState = {
  products: [],
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(URL);
    return response.data;
  }
);

export const loginUser = createAsyncThunk("products/loginUser", async ({ username, password, redirect, isLogin, notFound }) => {
  try {
    if (isLogin) {
      return isLogin;
    }
    if (username === "admin" && password === "admin") {
      redirect({ role: "isAdmin" });
      return { id: 99, role: "isAdmin", user: username, login: true };

    }
    const resPost = await axios.post("https://fakestoreapi.com/auth/login", {
      username: username !== "" ? username : " ",
      password: password !== "" ? password : " ",
    });
    const resGet = await axios.get("https://fakestoreapi.com/users");
    let find = resGet.data.find((res) => res.username === username);

    if (resPost.data.token) {
      redirect({ role: "user" });
      return { id: find.id, role: "user", user: `${find.name.firstname} ${find.name.lastname}`, token: resPost.data.token, login: true };
    }
  } catch (error) {
    notFound(true);
    throw error;
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItems = state.carts.slice();
      const newItem = { ...action.payload, qty: 1 };
      const existingItemIndex = existingItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        const existingItem = existingItems[existingItemIndex];
        const product = state.products.find((prod) => prod.id === newItem.id);

        if (existingItem.qty + 1 > product.qty) {
          // Tampilkan pesan stock melebihi batas
          alert("Stock melebihi batas");
          return;
        }

        existingItem.qty += 1;
      } else {
        existingItems.push(newItem);
      }

      state.carts = existingItems;
      localStorage.setItem("carts", JSON.stringify(existingItems));
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.carts = state.carts.filter((item) => item.id !== itemId);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    incrementItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.carts.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.qty += 1;
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.carts.find((item) => item.id === itemId);

      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
        localStorage.setItem("carts", JSON.stringify(state.carts));
      }
    },
  },
  extraReducers: {
    [fetchProducts.pending]: () => console.log("pending"),
    [fetchProducts.fulfilled]: (state, { payload }) => {
      console.log("fetch successfully");
      const productsWithQty = payload.map((product) => ({
        ...product,
        qty: 20,
      }));
      return { ...state, products: productsWithQty };
    },
    [fetchProducts.rejected]: () => console.log("pending"),
    [loginUser.pending]: (state, action) => {
      state.isLoading = true;
      state.login = [];
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.login = action.payload;
      localStorage.setItem("login", JSON.stringify(action.payload));
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  incrementItem,
  decrementItem,
  getCart,
  updateCart,
} = productsSlice.actions;

export const getAllProducts = (state) => state.products.products;
export const getAllCarts = (state) => state.products.carts;

export default productsSlice.reducer;
