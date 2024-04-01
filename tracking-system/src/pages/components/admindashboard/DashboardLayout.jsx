import React from "react";
import { NavBar, SideBar } from ".";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <Box display="flex" width="100%">
      <SideBar />
      <NavBar />
    </Box>
  );
};
