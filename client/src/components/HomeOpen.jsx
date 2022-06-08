import React from "react";
import "../styles/components/HomeOpen.scss";
import bgMobile from "../assets/pizza-open.png";
import bgDesktop from "../assets/pizza-open-desktop.jpg";
import { Link } from "react-router-dom";
import { IoFastFoodOutline, IoIceCreamOutline } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
const HomeOpen = () => {
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
  const iconSize = 27;
  return (
    <section
      className="open"
      style={{
        backgroundImage: `url(${windowWidth >= 1024 ? bgDesktop : bgMobile})`,
      }}
    >
      <div className="open__container">
        <h1 className="open__title">A WONDERFUL DISH </h1>
        <div className="open__icons">
          <IoFastFoodOutline size={iconSize} />
          <GiFullPizza size={iconSize} />
          <IoIceCreamOutline size={iconSize} />
          <BiCoffeeTogo size={iconSize} />
        </div>
        <p className="open__description">
          Zasmakuj dań stworzonych przez naszych kuchaży bądz sam nim zostań i
          swóż swoje wymarzone danie z wybranych składników a nasi kucharze
          zrobią resztę
        </p>
        <Link className="open__link" to="/make-dish">
          Sprawdz
        </Link>
      </div>
    </section>
  );
};

export default HomeOpen;
