import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import AppIcons from "../../Assets/icons";
import { path } from "../../mocks/routes";

export default function RestaurantCard({
  data = {},
  handleClick = (path, id) => {},
}) {
  return (
    <Card
      className="restaurant-card"
      id="restaurant-card"
      aria-disabled={false}
      onClick={() =>
        handleClick(path.restaurants.restaurantDetails, { id: data._id })
      }
    >
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
          width: "100%",
        }}
      >
        <Box
          className="brandLogo"
          sx={{
            background: `url(${data.generalDetails.logo})`,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CardContent
            sx={{
              width: "calc(100% - 40px)",
            }}
          >
            <Typography variant="h6" component={"h1"} fontWeight={"bold"}>
              {data.restaurantName}
            </Typography>
            <Typography variant="p" component={"p"} fontWeight={"500"}>
              Food Court
            </Typography>
          </CardContent>
          <Box
            sx={{
              width: "40px",
            }}
          >
            <AppIcons.ArrowRight />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
