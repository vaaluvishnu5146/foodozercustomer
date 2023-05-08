import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import AppIcons from "../../Assets/icons";

export default function FoodCard({ data = {}, handleClick = (id) => {} }) {
  return (
    <Card
      className="restaurant-card"
      id="product-card"
      aria-disabled={false}
      onClick={() => {}}
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
            background: `url(${data?.foodPicture})`,
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
              {data.foodName}
            </Typography>
            <Typography variant="p" component={"p"} fontWeight={"500"}>
              {data.foodDescription}
            </Typography>
            <Typography variant="p" component={"p"} fontWeight={"500"}>
              {data.pricingDetails.normalPrice}
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
