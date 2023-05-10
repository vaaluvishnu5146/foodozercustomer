import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getFoodForRestaurant, getRestaurant } from "../utils/Services";
import { useParams } from "react-router-dom";
import FoodCard from "../Components/Cards/FoodCard";
import { addItemToCart } from "../Redux/Reducer/Cart.reducer";
import { useDispatch, useSelector } from "react-redux";

export default function RestaurantDetails() {
  const dispatcher = useDispatch();
  const { items = [] } = useSelector((state) => state.cart);
  const [food, setFood] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const getParams = useParams();

  function handleAddToCart(data = null) {
    if (data) {
      dispatcher(addItemToCart({ ...data, quantity: 1 }));
    }
  }

  useEffect(() => {
    getRestaurant(getParams["id"])
      .then((result) => {
        if (result.success) setRestaurant(result.data);
      })
      .catch((error) => console.log(error));
    getFoodForRestaurant(getParams["id"])
      .then((result) => {
        if (result.success) setFood(result.data);
      })
      .catch((error) => console.log(error));
    return () => {};
  }, [getParams["id"]]);

  return (
    <main className="page-container">
      <Box className="welcome-header" id="home-welcome-header">
        <Typography variant="h3" component={"p"}>
          {restaurant.restaurantName}
        </Typography>
        <Typography variant="p" component={"p"}>
          {restaurant.restaurantDescription}
        </Typography>
      </Box>
      <Box className="list-section">
        {food.length > 0 &&
          food.map((food, i) => (
            <FoodCard
              data={food}
              handleClick={handleAddToCart}
              isItemAdded={
                items.filter((item) => item._id === food._id).length > 0
                  ? true
                  : false
              }
            />
          ))}
      </Box>
    </main>
  );
}
