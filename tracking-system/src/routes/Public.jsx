import { Navigate } from "react-router-dom";
import { Login, Register } from "../pages/public";
import { Dashboard } from "../pages/private";

export const publicRoutes = [
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "dashboard",
    element: <Dashboard />,
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
