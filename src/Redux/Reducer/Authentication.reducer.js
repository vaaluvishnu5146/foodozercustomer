import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    saveUserDetails: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload) {
        state.isLoggedIn = true;
        state.user = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveUserDetails } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
