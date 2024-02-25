import { Context } from "@/context/RootContex";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../header/Header";

const fallbackPath = "/";

const PlansLayout = () => {
  const { user } = useContext(Context);
  if (!user) {
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
