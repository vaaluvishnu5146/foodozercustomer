import { createSlice } from "@reduxjs/toolkit";

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    isFetching: false,
    data: [],
  },
  reducers: {
    saveRestaurantDetails: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't
      // actually mutate the state because it uses the Immer library, which detects
      // changes to a "draft state" and produces a brand new immutable state based off
      // those changes
      if (action.payload) {
        state.data = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveRestaurantDetails } = RestaurantSlice.actions;
export default RestaurantSlice.reducer;
