import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ children, ...rest }) => {
  return (
    <MuiButton size="small" {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
