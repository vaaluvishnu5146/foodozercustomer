import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      if (action.payload) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItemToCart } = CartSlice.actions;
export default CartSlice.reducer;
