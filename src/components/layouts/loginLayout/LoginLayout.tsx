import React, { FC } from "react";
import styles from "./loginLayout.module.scss";
import Footer from "../footer/Footer";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

const LoginLayout: FC<Props> = ({ children, className }) => {
  return (
    <main className={`${styles.main} ${className}`}>
      {children}
      <Footer />
    </main>
  );
};

export default LoginLayout;
