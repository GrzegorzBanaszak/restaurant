import React from "react";
import logo from "../assets/logo red.svg";
import "../styles/components/Nav.scss";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="web site logo" />
        <h3>WONDERFUL DISH</h3>
      </div>
    </nav>
  );
};

export default Nav;
