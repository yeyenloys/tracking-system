import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import moment from "moment";
import { useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// const validationSchema = Yup.object({
//   first_name: Yup.string().required("First Name is required"),
//   last_name: Yup.string().required("Last Name is required"),
//   contact_number: Yup.string().required("Contact Number is required"),
//   gender: Yup.string().required("Gender is required"),
//   birthdate: Yup.date().required("Birthdate is required"),
//   address: Yup.string().required("Address is required"),
// });

export const RegoneFOrm = ({ onContinue }) => {
  const { handleChange, touched, errors, values, setFieldValue } =
    useFormikContext();

  // const formik = useFormik({
  //   initialValues: {
  //     // first_name: "",
  //     // last_name: "",
  //     // contact_number: "",
  //     // gender: "",
  //     // birthdate: "",
  //     // address: "",
  //   },
  //   // validationSchema: validationSchema,
  //   onSubmit: () => {
  //     console.log("ASdsa");
  //     onContinue();
  //   },
  // });
  // console.log(formik.data);

  return (
    <Box sx={{ width: 500 }}>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          marginBottom: 2,
        }}>
        <Box sx={{ width: "240px" }}>
          <Typography marginBottom={1}>First Name</Typography>
          <TextField
            InputProps={{
              sx: { borderRadius: 3 },
            }}
            fullWidth
            id="first_name"
            name="first_name"
            variant="outlined"
            value={values.first_name}
            onChange={handleChange}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={touched.first_name && errors.first_name}
          />
        </Box>
        <Box sx={{ width: "240px" }}>
          <Typography marginBottom={1}>Last Name</Typography>
          <TextField
            InputProps={{
              sx: { borderRadius: 3 },
            }}
            fullWidth
            id="last_name"
            name="last_name"
            variant="outlined"
            value={values.last_name}
            onChange={handleChange}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={touched.last_name && errors.last_name}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <Box sx={{ width: "195px" }}>
          <Typography marginBottom={1}>Contact Number</Typography>
          <TextField
            InputProps={{
              sx: { borderRadius: 3 },
            }}
            fullWidth
            id="contact_number"
            name="contact_number"
            variant="outlined"
            value={values.contact_number}
            onChange={handleChange}
            error={touched.contact_number && Boolean(errors.contact_number)}
            helperText={touched.contact_number && errors.contact_number}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
        <Box sx={{ width: "86px", zIndex: 999 }}>
          <Typography marginBottom={1}>Gender</Typography>
          <FormControl fullWidth>
            <Select
              id="gender"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              error={touched.gender && Boolean(errors.gender)}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "195px" }}>
          <Typography marginBottom={1}>Birthdate</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MuiDatePicker
              value={values.birthdate}
              onChange={(date) => {
                setFieldValue(
                  "birthdate",
                  // moment(date).format("YYYY-MM-DD")
                  date
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  id="birthdate"
                  name="birthdate"
                  variant="outlined"
                  error={touched.birthdate && Boolean(errors.birthdate)}
                  helperText={touched.birthdate ? errors.birthdate || " " : " "}
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: values.birthdate ? "white" : "transparent",
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    style: { paddingTop: 0 },
                  }}
                  sx={{ borderRadius: "10px" }}
                />
              )}
              disableFuture
              label=""
              InputLabelProps={{ style: { display: "none" } }}
            />
          </LocalizationProvider>
        </Box>
      </Box>

      <Box>
        <Typography marginBottom={1}>Address</Typography>
        <TextField
          sx={{
            borderRadius: "10px",
            height: "50px",
            width: "500px",
          }}
          InputProps={{
            sx: { borderRadius: 3 },
          }}
          fullWidth
          id="address"
          name="address"
          variant="outlined"
          value={values.address}
          onChange={handleChange}
          error={touched.address && Boolean(errors.address)}
          helperText={touched.address && errors.address}
        />
      </Box>
    </Box>
  );
};
