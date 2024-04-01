import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../../../../public/Logo.png";
import { Typography } from "@mui/material";
import { sidebarData } from "./sidebarData";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#21293C",
        height: "100vh",
        width: "220px",
      }}>
      <Box display="flex" sx={{ mt: 2 }}>
        <img src={Logo} alt="company-logo" height={55} width={55} />

        <Typography
          variant="v1"
          sx={{
            py: 2,
            color: "white",
            fontStyle: "italic",
          }}>
          TASK TRACKER
        </Typography>
      </Box>

      <List
        sx={{
          color: "white",
          position: "relative",
        }}>
        {sidebarData.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleClick(item.path)}>
              <ListItemIcon sx={{ marginRight: -3, color: "#ffffff" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
