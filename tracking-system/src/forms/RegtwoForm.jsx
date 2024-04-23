import React from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
  menuItemClasses,
} from "@mui/material";
import { useFormik, useFormikContext } from "formik";
import * as Yup from "yup";

export const RegtwoForm = ({ department, position }) => {
  const { handleChange, touched, errors, values, setFieldValue } =
    useFormikContext();

  return (
    <Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography marginBottom={1}>Department</Typography>
        <FormControl fullWidth variant="outlined">
          <Select
            labelId="department_id-label"
            id="department_id"
            name="department_id"
            value={values.department_id}
            onChange={handleChange}
            error={touched.department_id && Boolean(errors.department_id)}>
            {department.map((item, index) => (
              <MenuItem value={item.id} key={index}>
                {" "}
                {item.name}{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography marginBottom={1}>Job Position</Typography>
        <FormControl fullWidth variant="outlined">
          <Select
            labelId="position_id-label"
            id="position_id"
            name="position_id"
            value={values.position_id}
            onChange={handleChange}
            error={touched.position_id && Boolean(errors.position_id)}>
            {position.map((item, index) => (
              <MenuItem value={item.id} key={index}>
                {" "}
                {item.name}{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Typography marginBottom={1}>Employee ID</Typography>
        <TextField
          fullWidth
          id="company_id"
          name="company_id"
          variant="outlined"
          value={values.company_id}
          onChange={handleChange}
          error={touched.company_id && Boolean(errors.company_id)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 500 }}
        />
      </Box>
    </Box>
  );
};
