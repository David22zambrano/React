import { Button } from "@mui/material";
import React from "react";

const commonBotton = ({ children, color, disable, size, variant, sx }) => {
  return (
    <Button
      color={color}
      disabled={disable}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default commonBotton;
