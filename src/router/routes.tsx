import PrivateLayout from "@/components/layouts/privateLayout/PlansLayout";
import { Login } from "@/pages/login";
import { Plans } from "@/pages/plans";
import Summary from "@/pages/summary/Summary";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PublicRouter from "./PublicRouter";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PublicRouter component={Login} />} />
      <Route path="/planes" element={<PrivateLayout />}>
        <Route index element={<Plans />} />
      </Route>
      <Route path="/resumen" element={<PrivateLayout />}>
        <Route index element={<Summary />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </>
  )
);
