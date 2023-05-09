import { Box } from "@mui/material";
import React from "react";

export default function ImageBanner({ Uri = "", classes = "" }) {
  return (
    <Box
      className={classes}
      sx={{
        backgroundImage: `url(${Uri})`,
      }}
    />
  );
}
