import { Button } from "@mui/material";
import React from "react";

export default function BasicCta({
  label = "",
  onClick = (e) => {},
  overrides = {},
  disabled = false,
}) {
  return (
    <Button
      variant="contained"
      disableElevation
      onClick={onClick}
      sx={overrides}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
