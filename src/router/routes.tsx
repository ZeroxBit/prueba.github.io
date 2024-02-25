import { Login } from "@/pages/login";
import { Plans } from "@/pages/plans";
import Summary from "@/pages/summary/Summary";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRouter from "./PublicRouter";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicRouter component={Login} />} />
      <Route path="/planes" element={<PrivateRoute component={Plans} />} />
      <Route path="/resumen" element={<PrivateRoute component={Summary} />} />
      <Route path="*" element={<div>404</div>} />
    </>
  )
);
