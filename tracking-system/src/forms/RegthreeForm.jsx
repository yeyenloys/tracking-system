import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useFormik, useFormikContext } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
//   password_confirmation: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });

export const RegthreeForm = ({ onPrev, onContinue }) => {
  const { handleChange, touched, errors, values, setFieldValue } =
    useFormikContext();
  // const formik = useFormik({
  //   initialValues: {
  //     // email: "",
  //     // password: "",
  //     // password_confirmation: "",
  //     // showPassword: false,
  //     // showpassword_confirmation: false,
  //   },
  //   // validationSchema: validationSchema,
  //   onSubmit: () => {
  //     onContinue();
  //   },
  // });

  // const handleTogglePasswordVisibility = (field) => () => {
  //   setFieldValue(field, (prevValue) => !prevValue);
  // };

  const [showPassword, setShowPassword] = useState(false);
  const [showpassword_confirmation, setShowpassword_confirmation] =
    useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowpassword_confirmation = () => {
    setShowpassword_confirmation(!showpassword_confirmation);
  };

  return (
    <Box>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Box sx={{ marginBottom: 2 }}>
        <Typography htmlFor="email" marginBottom={1}>
          Email
        </Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          variant="outlined"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          sx={{ width: 500 }}
        />
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography htmlFor="password" marginBottom={1}>
          Create Password
        </Typography>
        <TextField
          fullWidth
          id="password"
          name="password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          sx={{ width: 500 }}
        />
      </Box>

      <Box sx={{ marginBottom: 2 }}>
        <Typography htmlFor="password_confirmation" marginBottom={1}>
          Confirm Password
        </Typography>
        <TextField
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          variant="outlined"
          type={showpassword_confirmation ? "text" : "password"}
          value={values.password_confirmation}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowpassword_confirmation}
                  edge="end">
                  {showpassword_confirmation ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={
            touched.password_confirmation &&
            Boolean(errors.password_confirmation)
          }
          helperText={
            touched.password_confirmation && errors.password_confirmation
          }
          sx={{ width: 500 }}
        />
      </Box>

      {/* <Box display="flex" justifyContent="center" gap={2}>
          <Button
            sx={{
              textTransform: "none",
              height: "50px",
              width: "150px",
              borderRadius: "10px",
            }}
            variant="outlined"
            color="primary"
            type="button"
            onClick={onPrev}>
            Previous
          </Button>
          <Button
            sx={{
              textTransform: "none",
              height: "50px",
              width: "150px",
              borderRadius: "10px",
            }}
            variant="contained"
            color="primary"
            type="submit">
            Next
          </Button>
        </Box> */}
      {/* </form> */}
    </Box>
  );
};
