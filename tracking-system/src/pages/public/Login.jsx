import React from "react";
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/Logo.png";
import { LoginForm } from "../../forms";
import { NavLink, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const Login = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
        }}>
        <Box position="absolute">
          <img src={Logo} alt="company-logo" height={164} width={164} />
        </Box>
        <Box
          sx={{
            width: "60%",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography variant="h5" mb={3} fontWeight={700}>
            Log In
          </Typography>
          <LoginForm />
        </Box>
        <Box
          sx={{
            width: "40%",
            borderTopLeftRadius: 150,
            borderBottomLeftRadius: 150,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Welcome Back!
          </Typography>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Great to see you again! Log in to manage your tasks.
          </Typography>
          <Typography variant="h2" marginTop="40px" marginBottom="20px">
            Don't have an account?
          </Typography>
          <NavLink to="/register" style={{ textDecoration: "none" }}>
            <Typography
              variant="button"
              component="button"
              sx={{
                textTransform: "none",
                display: "block",
                width: "150px",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                cursor: "pointer",
                fontSize: "14px",
              }}>
              Sign Up
            </Typography>
          </NavLink>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};
