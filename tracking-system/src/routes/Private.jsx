import { DashboardLayout } from "../pages/components/admindashboard";
import Dashboard from "../pages/private/dashboard/Dashboard";
import { Tasks, Employees } from "../pages/private";

export const privateRoutes = [
  {
    element: <DashboardLayout />,
    children: [
      {
        element: <Dashboard />,
        path: "/dashboard",
      },
      {
        element: <Tasks />,
        path: "/tasks",
      },
      {
        element: <Employees />,
        path: "/employees",
      },
    ],
  },
];
