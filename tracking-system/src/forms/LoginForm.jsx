import React, { useState } from "react";
import {
  TextField,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosApi from "../AxiosApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CustomTextField from "./CustomTextField";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axiosApi.post(`/login`, values);
        setLoading(false);
        console.log(response);
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/dashboard");
        console.log("Maryenn", response);
      } catch (err) {
        console.log("Kyleeee", err);
        setLoading(false); // Hide loader in case of an error
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    },
  });

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
          {loading && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
              }}>
              <CircularProgress color="primary" />
            </Box>
          )}
        </Box>
      </form>
      <ToastContainer />
    </Box>
  );
};
