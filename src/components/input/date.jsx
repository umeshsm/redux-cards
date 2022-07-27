import React from "react";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

function DateInput({ control, name }) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          style={{ padding: "10px" }}
          showTimeSelect
          dateFormat="Pp"
          onChange={(date) => onChange(JSON.stringify(date))}
          selected={new Date(JSON.parse(value))}
        />
      )}
    />
  );
}

export default DateInput;
