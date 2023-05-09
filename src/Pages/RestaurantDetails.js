import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getFoodForRestaurant, getRestaurant } from "../utils/Services";
import { useParams } from "react-router-dom";
import FoodCard from "../Components/Cards/FoodCard";

export default function RestaurantDetails() {
  const [food, setFood] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const getParams = useParams();
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
        {food.length > 0 && food.map((food, i) => <FoodCard data={food} />)}
      </Box>
    </main>
  );
}
