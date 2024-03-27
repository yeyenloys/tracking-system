import { privateRoutes, publicRoutes } from ".";

import { createBrowserRouter } from "react-router-dom";
import { userCheck } from "../hooks";

let PrivateRoutes = [];
if (userCheck) {
  PrivateRoutes = privateRoutes;
}
export const router = createBrowserRouter([...PrivateRoutes, ...publicRoutes]);
