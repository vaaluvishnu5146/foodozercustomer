import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  placeholder = "",
  label = "",
  id = "",
  value = "",
  variant = "outlined",
  handleChange = (e) => {},
  overrides = {},
  type = "text",
}) {
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      fullWidth
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      sx={overrides}
      type={type}
    />
  );
}
