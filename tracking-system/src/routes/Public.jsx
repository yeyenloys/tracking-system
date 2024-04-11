import { Navigate } from "react-router-dom";
import { Login, Register } from "../pages/public";

export const publicRoutes = [
  {
    path: "login",
    element: <Login />,
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
