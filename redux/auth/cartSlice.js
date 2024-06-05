import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    cart: [],
  },
  name: "cart",
  reducers: {
    addTocart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item._id === action.payload.item._id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload.item, quantity: 1 });
      }
    },
    deleteCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item._id !== action.payload.item._id
      );
      state.cart = removeItem;
    },
    increaseQauntity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item._id === action.payload.item._id
      );
      itemPresent.quantity++;
    },
    deceraseQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item._id === action.payload.item._id
      );
      if (itemPresent.quantity === 1) {
        itemPresent.quantity = 1;
      } else {
        itemPresent.quantity--;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addTocart,
  deleteCart,
  clearCart,
  increaseQauntity,
  deceraseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
