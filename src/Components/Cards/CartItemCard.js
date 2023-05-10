import React from "react";
import { Box, Card, IconButton, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function CartItemCard({ data = {} }) {
  return (
    <Box className="cart-item">
      <Card
        className="cart-item-card"
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
          <Typography variant={"h5"}>{data.foodName || "NA"}</Typography>
        </Box>
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
      </Card>
    </Box>
  );
}
