import React from "react";
import logo from "../../../Assets/logo.png";
import Styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className={Styles.header}>
      <img className={Styles.headerLogo} src={logo} alt="Kasa Logo" />
      <nav>
        <NavLink
          to="/"
          className={pathname === "/" ? Styles.navItemActive : Styles.navItem}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={
            pathname === "/about" ? Styles.navItemActive : Styles.navItem
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
