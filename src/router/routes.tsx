import { Login } from "@/pages/login";
import { Plans } from "@/pages/plans";
import Summary from "@/pages/summary/Summary";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRouter from "./PublicRouter";
import PlansLayout from "@/components/layouts/plansLayout/PlansLayout";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicRouter component={Login} />} />
      <Route path="/planes" element={<PlansLayout />}>
        <Route index element={<Plans />} />
      </Route>
      <Route path="/resumen" element={<PrivateRoute component={Summary} />} />
      <Route path="*" element={<div>404</div>} />
    </>
  )
);
