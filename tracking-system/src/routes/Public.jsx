import { Navigate } from "react-router-dom";
import { Login, Register } from "../pages/public";
import { DashboardLayout } from "../pages/components/admindashboard";
import Dashboard from "../pages/private/dashboard/Dashboard";
import Users from "../pages/private/users/Users";
import Settings from "../pages/private/settings/Settings";
import Approver from "../pages/private/approvers/Approver";

export const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },

  {
    element: <DashboardLayout />,
    children: [
      {
        element: <Dashboard />,
        path: "/dashboard",
      },
      {
        element: <Users />,
        path: "/users",
      },
      {
        element: <Settings />,
        path: "/settings",
      },
      {
        element: <Approver />,
        path: "/approver",
      },
    ],
  },

  {
    path: "*",
    element: <Navigate replace to="/login" />,
  },

  {
    path: "register",
    element: <Register />,
  },
];
