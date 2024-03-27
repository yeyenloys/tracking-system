import React from "react";
import { TextField, InputLabel } from "@mui/material";

const CustomTextField = ({ name, label, formik, type = "text" }) => {
  return (
    <>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <TextField
        InputProps={{
          sx: { borderRadius: 3 },
        }}
        fullWidth
        id={name}
        name={name}
        type={type}
        variant="outlined"
        margin="normal"
        value={formik.values[name]}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </>
  );
};

export default CustomTextField;
