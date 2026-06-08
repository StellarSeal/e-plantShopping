import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice.jsx";

export const paradiseNurseryStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
