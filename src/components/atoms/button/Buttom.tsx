import React, { FC } from "react";
import Loader from "../loader/Loader";
import "./buttonStyles.scss";

interface ButtomProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isLoading?: boolean;
}

const Buttom: FC<ButtomProps> = ({ children, isLoading, ...props }) => {
  return (
    <button className="button" {...props}>
      <span className={`button__text ${isLoading ? "hidden" : ""}`}>{children}</span>
      <Loader className={isLoading ? "" : "hidden"} />
    </button>
  );
};

export default Buttom;
