import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router/routes.tsx";
import "@/styles/index.scss";
import RootContex from "./context/RootContex.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootContex>
      <RouterProvider router={routers} />
    </RootContex>
  </React.StrictMode>
);
