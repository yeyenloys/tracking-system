import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <Box display="flex" flexDirection="column" sx={{ width: "100%" }}>
      {/* TopBar */}
      <Box
        sx={{
          display: "flex",
          height: "75px",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#21293C",
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            color: "white",
          }}>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <AccountCircleIcon sx={{ marginLeft: "10px" }} />
        </Box>
      </Box>

      {/* Pages */}
      <Stack
        sx={{
          overflow: "scroll",
          width: "calc(100vw - 200px)",
          height: "calc(100vh - 75px)",
        }}>
        <Outlet />
      </Stack>
    </Box>
  );
};
