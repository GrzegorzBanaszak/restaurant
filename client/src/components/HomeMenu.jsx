import React from "react";
import "../styles/components/HomeMenu.scss";
import menuImage from "../assets/menu.png";
import bgMobile from "../assets/menu-bg.png";
import bgDesktop from "../assets/menu-bg-desktop.png";
import { useState } from "react";
import { useEffect } from "react";
const HomeMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowWidthChangeHandelr = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowWidthChangeHandelr);
    return () => {
      window.removeEventListener("resize", windowWidthChangeHandelr);
    };
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${windowWidth >= 1024 ? bgDesktop : bgMobile})`,
      }}
      className="menu"
    >
      <div className="menu__container">
        <img src={menuImage} alt="menu" />
      </div>
    </section>
  );
};

export default HomeMenu;
