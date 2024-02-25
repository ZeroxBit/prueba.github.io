import { USER_KEY } from "@/consts/storageKeys";
import { getStorageServices } from "@/services/storageServices";
import { FC } from "react";
import { Navigate } from "react-router-dom";
import { CustomRouterProps } from "./routerInterfaces";

const PublicRouter: FC<CustomRouterProps> = ({ component: Component, fallbackPath = "/planes" }) => {
  const userStore = getStorageServices(USER_KEY);
  if (userStore) {
    return <Navigate to={fallbackPath} replace />;
  }

  return <Component />;
};

export default PublicRouter;
