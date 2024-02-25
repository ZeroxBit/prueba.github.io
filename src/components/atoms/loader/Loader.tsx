import { FC } from "react";
import "./loaderStyles.scss";

type LoaderProps = {
  className?: string;
  show?: boolean;
};

const Loader: FC<LoaderProps> = ({ className, show = true }) => {
  if (!show) return <></>;

  return <span className={`loader ${className}`}></span>;
};

export default Loader;
