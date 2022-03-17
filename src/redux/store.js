import { configureStore } from "@reduxjs/toolkit";
import cartItemsSlice from "./cart/cartItemsSlice";
import productModalSlice from "./product-modal/productModalSlice";

export const store = configureStore({
  reducer: {
    productModal: productModalSlice,
    cartItems: cartItemsSlice,
  },
});
