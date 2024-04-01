import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SettingsIcon from "@mui/icons-material/Settings";

export const sidebarData = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: React.createElement(DashboardIcon),
  },
  {
    path: "/users",
    icon: React.createElement(PersonIcon),
    name: "Users",
  },
  {
    path: "/approver",
    icon: React.createElement(SupervisorAccountIcon),
    name: "Approvers",
  },
  {
    path: "/settings",
    icon: React.createElement(SettingsIcon),
    name: "Settings",
  },
];
