import React from "react";
import Styles from "./Layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={Styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
