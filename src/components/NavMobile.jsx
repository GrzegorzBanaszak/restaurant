import React from "react";
import "../styles/components/NavMobile.scss";
import logo from "../assets/logored.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navMobile">
      <div className="navMobile__header">
        <div className="navMobile__logo">
          <img src={logo} alt="web site logo" />
          <h3>WONDERFUL DISH</h3>
        </div>
        <GiHamburgerMenu
          size={36}
          color="#b21807"
          onClick={() => setIsOpen((prev) => !prev)}
          className="navMobile__toggle"
        />
      </div>
      <motion.div
        animate={{ height: isOpen ? "250px" : 0, transition: { delay: 0.2 } }}
        className="navMobile__contant"
      >
        <Link className="navMobile__link" to="/">
          Home
        </Link>
        <Link className="navMobile__link" to="/make-dish">
          make dish
        </Link>
        <Link className="navMobile__link" to="/dishes">
          our dishes
        </Link>
        <div className="navMobile__btns">
          <Link className="navMobile__btn" to="/login">
            Login
          </Link>
          <Link className="navMobile__btn" to="/register">
            Register
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavMobile;
