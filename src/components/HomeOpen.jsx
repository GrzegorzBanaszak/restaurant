import React from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import "../styles/components/HomeOpen.scss";
import bg from "../assets/pizza-open.png";
import { Link } from "react-router-dom";
import { IoFastFoodOutline, IoIceCreamOutline } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
const HomeOpen = () => {
  const iconSize = 27;
  return (
    <section className="open" style={{ backgroundImage: `url(${bg})` }}>
      <NavMobile />
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
