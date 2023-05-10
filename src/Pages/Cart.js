import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartItemCard from "../Components/Cards/CartItemCard";

export default function Cart() {
  const { items = [] } = useSelector((state) => state.cart);
  return (
    <main className="page-container cart-page">
      <Box
        className="cart-header"
        sx={{
          padding: "10px",
        }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Cart({items.length})
        </Typography>
      </Box>
      <Box className="cart-content">
        {items.map((item, i) => (
          <CartItemCard key={`food-card-${i}`} data={item} />
        ))}
      </Box>
    </main>
  );
}
