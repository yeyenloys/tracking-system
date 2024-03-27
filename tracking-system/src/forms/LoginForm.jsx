import React from "react";
import { TextField, Box, Button, Typography, InputLabel } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosApi from "../AxiosApi";
import CustomTextField from "./CustomTextField";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await axiosApi
        .post(`/login`, values)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
          console.log("Maryenn", response);
        })
        .catch((err) => {
          console.log("Kyleeee", err);
        });
    } catch (error) {
      console.log("smthng went wrong");
    }
  };

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "35vw", borderRadius: "50px" }}>
          <CustomTextField name="email" label="Email" formik={formik} />
          <CustomTextField
            name="password"
            label="Password"
            formik={formik}
            type="password"
          />
          <Box display="flex" justifyContent="center" marginY={2}>
            <Typography
              color="secondary"
              fontWeight={700}
              fontSize="14px"
              sx={{ textDecoration: "underline", cursor: "pointer" }}>
              Forgot Password?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" my={2}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                display: "flex",
                alignSelf: "center",
                textTransform: "none",
                width: "150px",
                height: "50px",
                borderRadius: "10px",
              }}>
              Log In
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
