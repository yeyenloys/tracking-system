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
    path: "/employees",
    icon: React.createElement(PersonIcon),
    name: "Employees",
  },
  {
    path: "/tasks",
    icon: React.createElement(SupervisorAccountIcon),
    name: "Tasks",
  },
  // {
  //   path: "/settings",
  //   icon: React.createElement(SettingsIcon),
  //   name: "Settings",
  // },
];
