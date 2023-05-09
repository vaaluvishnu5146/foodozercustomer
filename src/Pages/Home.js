import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RestaurantCard from "../Components/Cards/RestaurantCard";
import { useNavigate } from "react-router-dom";
import { getRestaurants } from "../utils/Services";
import { useSelector, useDispatch } from "react-redux";
import { saveRestaurantDetails } from "../Redux/Reducer/Restaurants.reducer";

export default function Home() {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const { authentication, restaurant } = useSelector((state) => state);

  useEffect(() => {
    getRestaurants()
      .then((result) => {
        const { data, message, success } = result;
        if (success) {
          dispatcher(saveRestaurantDetails(data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, []);

  function handleRoute(path = "", scenario = {}) {
    if (path === "restaurantDetails") {
      navigate(`/restaurant/${scenario.id}`);
    }
  }

  return (
    <main className="page-container">
      <Box className="welcome-header" id="home-welcome-header">
        <Typography variant="h3" component={"p"}>
          Welcome
        </Typography>
        <Typography variant="h6" component={"p"}>
          {authentication?.user?.userName || "Eater"}
        </Typography>
      </Box>
      <Box className="list-section">
        {restaurant?.data &&
          restaurant?.data?.map((d, i) => (
            <RestaurantCard
              data={d}
              key={`restaurants-card-${i}`}
              handleClick={handleRoute}
            />
          ))}
      </Box>
    </main>
  );
}
