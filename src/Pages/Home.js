import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import RestaurantCard from "../Components/Cards/RestaurantCard";
import { useNavigate } from "react-router-dom";
import { getRestaurants } from "../utils/Services";

export default function Home() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants()
      .then((result) => {
        const { data, message, success } = result;
        if (success) {
          setRestaurants(data);
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
          User Name
        </Typography>
      </Box>
      <Box className="list-section">
        {restaurants &&
          restaurants.map((d, i) => (
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
