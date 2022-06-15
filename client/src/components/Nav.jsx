import React from "react";
import "../styles/components/Nav.scss";
import logo from "../assets/logored.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiFoodMenu, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleMenu } from "../features/menu/menuSlice";
import { logout } from "../features/auth/authSlice";
import { FiShoppingCart } from "react-icons/fi";
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
    target: "/make-dish",
  },
];

const Nav = () => {
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.menu);
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  const onClickLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="nav">
      <div className="nav__header">
        <div className="nav__logo">
          <img src={logo} alt="web site logo" />
          <h3>WONDERFUL DISH</h3>
        </div>
        <div className="nav__contant--desktop">
          {menuList.map(({ name, target }, index) => (
            <Link key={index} className="nav__link" to={target}>
              {name}
            </Link>
          ))}
        </div>
        <div className="nav__btns--desktop">
          {user ? (
            <>
              <div className="nav__user">
                <BiUser /> {user.name}
              </div>
              <div className="nav__cart">
                <FiShoppingCart />
                {cart.length > 0 && <p>{cart.length}</p>}
              </div>
              <button className="nav__btn" onClick={onClickLogout}>
                Wyloguj
              </button>
            </>
          ) : (
            <>
              <Link className="nav__btn" to="/login">
                Logowanie
              </Link>
              <Link className="nav__btn" to="/register">
                Rejestracja
              </Link>
            </>
          )}
        </div>
        <div className="nav__toggles">
          {window.location.pathname === "/dishes" && (
            <BiFoodMenu
              size={36}
              color="#b21807"
              className="nav__toggle"
              onClick={() => dispatch(toggleSidebar())}
            />
          )}

          <GiHamburgerMenu
            size={36}
            color="#b21807"
            onClick={() => dispatch(toggleMenu())}
            className="nav__toggle"
          />
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: showMenu ? "250px" : 0,
          transition: { delay: 0.1 },
        }}
        onClick={() => dispatch(toggleMenu())}
        className="nav__contant--mobile"
      >
        {menuList.map(({ name, target }, index) => (
          <Link key={index} className="nav__link" to={target}>
            {name}
          </Link>
        ))}
        <div className="nav__btns--mobile">
          {user ? (
            <>
              <div className="nav__user">
                <BiUser />
              </div>
              <button className="nav__btn" onClick={onClickLogout}>
                Wyloguj
              </button>
            </>
          ) : (
            <>
              <Link className="nav__btn" to="/login">
                Logowanie
              </Link>
              <Link className="nav__btn" to="/register">
                Rejestracja
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
