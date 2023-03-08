import React from "react";
import logo from "../../../Assets/logoWhite.png";
import Styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <img src={logo} alt="Kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
