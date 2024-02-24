import { Login } from "@/pages/login";
import { Plans } from "@/pages/plans";
import Summary from "@/pages/summary/Summary";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/planes",
    element: <Plans />,
    // loader: rootLoader,
  },
  {
    path: "/resumen",
    element: <Summary />,
    // loader: rootLoader,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
