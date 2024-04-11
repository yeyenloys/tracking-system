import React, { useState } from "react";
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
import LogoutIcon from "@mui/icons-material/Logout"; // Import LogoutIcon
import Logo from "../../../../public/Logo.png";
import {
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { sidebarData } from "./sidebarData";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../../AxiosApi";
import Logout from "../../../assets/Logout.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SideBar = () => {
  const navigate = useNavigate();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirmed = () => {
    // console.log(response.data.token);
    try {
      axiosApi
        .post(`/logout`)
        .then(() => {
          localStorage.clear();
          navigate("/login");
          console.log("ni gana");
        })
        .catch((err) => {
          console.log("Kyleeee", err);
          // setOpen(false);
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
        });
    } catch (error) {
      navigate("/login");
      console.log("smthng went wrong");
    }
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
      <Box sx={{ position: "absolute", bottom: 10, color: "white" }}>
        <ListItem disablePadding onClick={handleLogout}>
          <ListItemButton>
            <ListItemIcon sx={{ marginRight: -3, color: "#ffffff" }}>
              <img src={Logout} alt="" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Box>

      <Dialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLogoutDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogoutConfirmed} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
