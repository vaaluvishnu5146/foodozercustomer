import Home from "../Pages/Home";
import RestaurantDetails from "../Pages/RestaurantDetails";

export const path = Object.freeze({
  home: "home",
  restaurants: {
    restaurantDetails: "restaurantDetails",
  },
});

const routes = [
  {
    name: "Home",
    id: path.home,
    path: "/",
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
];

export default routes;
