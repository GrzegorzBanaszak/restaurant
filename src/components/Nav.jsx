import React from "react";
import "../styles/components/Nav.scss";
import logo from "../assets/logored.png";

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
