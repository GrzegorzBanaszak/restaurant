import React from "react";
import "../styles/components/HomeMenu.scss";
import menuImage from "../assets/menu.png";
import menuBg from "../assets/menu-bg.png";
const HomeMenu = () => {
  return (
    <section style={{ backgroundImage: `url(${menuBg})` }} className="menu">
      <img src={menuImage} alt="menu" />
    </section>
  );
};

export default HomeMenu;
