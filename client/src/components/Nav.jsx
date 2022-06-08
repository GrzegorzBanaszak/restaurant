import React from "react";
import "../styles/components/Nav.scss";
import logo from "../assets/logored.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const menuList = [
  {
    name: "Strona główna",
    target: "/",
  },
  {
    name: "Nasze dania",
    target: "/dishes",
  },
  {
    name: "Stwórz danie",
    target: "/make--dish",
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__header">
        <div className="nav__logo">
          <img src={logo} alt="web site logo" />
          <h3>WONDERFUL DISH</h3>
        </div>
        <div className="nav__contant--desktop">
          {menuList.map(({ name, target }, index) => (
            <Link key={index} className="nav__link"  to={target}>
              {name}
            </Link>
          ))}
        </div>
        <div className="nav__btns--desktop">
          <Link className="nav__btn" to="/login">
            Logowanie
          </Link>
          <Link className="nav__btn" to="/register">
            Rejestracja
          </Link>
        </div>
        <GiHamburgerMenu
          size={36}
          color="#b21807"
          onClick={() => setIsOpen((prev) => !prev)}
          className="nav__toggle"
        />
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "250px" : 0, transition: { delay: 0.2 } }}
        className="nav__contant--mobile"
      >
        {menuList.map(({ name, target }, index) => (
          <Link key={index} className="nav__link"  to={target}>
            {name}
          </Link>
        ))}
        <div className="nav__btns--mobile">
          <Link className="nav__btn" to="/login">
            Logowanie
          </Link>
          <Link className="nav__btn" to="/register">
            Rejestracja
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
