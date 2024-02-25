import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header";
import { getStorageServices } from "@/services/storageServices";
import { USER_KEY } from "@/consts/storageKeys";

const fallbackPath = "/";

const PlansLayout = () => {
  const userStore = getStorageServices(USER_KEY);
  if (!userStore) {
    return <Navigate to={fallbackPath} replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PlansLayout;
