import { configureStore } from "@reduxjs/toolkit";
// importing reducer from slice
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";

const store = configureStore({
  //   all the reducer created in slice will be here
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
