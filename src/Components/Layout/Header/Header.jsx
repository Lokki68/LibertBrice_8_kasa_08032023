import React from "react";
import logo from "../../../Assets/logo.png";
import Styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={Styles.header}>
      <img className={Styles.headerLogo} src={logo} alt="Kasa Logo" />
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">A Propos</a>
      </nav>
    </div>
  );
};

export default Header;
