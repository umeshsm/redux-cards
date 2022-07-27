import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function Input({ control, name, ...rest }) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: "Required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          onChange={onChange}
          value={value}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
}

export default Input;
