import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function FoodCard({
  data = {},
  handleClick = (data) => {},
  isItemAdded = false,
}) {
  return (
    <Card
      className="restaurant-card"
      id="product-card"
      aria-disabled={false}
      onClick={() => handleClick(data)}
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
            background: "url(" + data?.foodPicture + ")",
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
            {!isItemAdded && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                <Button variant="contained" disableElevation>
                  Add to cart
                </Button>
              </Box>
            )}
            {isItemAdded && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                }}
              >
                <IconButton variant="contained" disableElevation>
                  <ControlPointIcon />
                </IconButton>
                <Typography variant="h5">1</Typography>
                <IconButton variant="contained" disableElevation>
                  <RemoveCircleIcon />
                </IconButton>
              </Box>
            )}
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}
