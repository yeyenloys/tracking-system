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

export const RegthreeForm = ({ onPrev, onContinue }) => {
  const { handleChange, touched, errors, values, setFieldValue } =
    useFormikContext();

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
    </Box>
  );
};
