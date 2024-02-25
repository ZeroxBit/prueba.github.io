import React, { FC } from "react";
import styles from "./loginLayout.module.scss";
import Footer from "../footer/Footer";
import Header from "@/components/layouts/header/Header";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

const LoginLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default LoginLayout;
