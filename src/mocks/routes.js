import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RestaurantDetails from "../Pages/RestaurantDetails";

export const path = Object.freeze({
  auth: {
    signin: "signin",
    signup: "signup",
  },
  home: "home",
  restaurants: {
    restaurantDetails: "restaurantDetails",
  },
  cart: "cart",
});

export const authRoutes = [
  {
    name: "Login",
    id: path.auth.signin,
    path: "/",
    component: Login,
    children: [],
  },
];

export const routes = [
  {
    name: "Home",
    id: path.home,
    path: "/home",
    component: Home,
    children: [],
  },
  {
    name: "Restaurant Details",
    id: path.restaurants.restaurantDetails,
    path: "/restaurant/:id",
    component: RestaurantDetails,
    children: [],
  },
  {
    name: "Cart Details",
    id: path.cart,
    path: "/cart/:id",
    component: Cart,
    children: [],
  },
];
