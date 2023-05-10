import { Box } from "@mui/material";
import React from "react";

export default function Appbar({
  prefix = null,
  content = null,
  suffix = null,
}) {
  return (
    <Box className="app-bar" id="app-bar">
      <Box className="prefix">{prefix}</Box>
      <Box className="content">{content}</Box>
      <Box className="suffix">{suffix}</Box>
    </Box>
  );
}
