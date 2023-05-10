import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import AuthenticationSlice from "./Reducer/Authentication.reducer";
import RestaurantsReducer from "./Reducer/Restaurants.reducer";
import CartReducer from "./Reducer/Cart.reducer";

export default configureStore({
  reducer: {
    authentication: AuthenticationSlice,
    restaurant: RestaurantsReducer,
    cart: CartReducer,
  },
});
