import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { toggleMenu } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/auth/authSlice";
import { getDishes } from "../features/dishes/dishesSlice";
import Message from "./Message";
const Layout = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.menu);
  const { token, user } = useSelector((state) => state.auth);
  const { isShow } = useSelector((state) => state.message);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!user && token !== null) {
      dispatch(getUser(token));
    }
    dispatch(getDishes());
  }, []);
  return (
    <>
      <Nav />
      <div
        onClick={() => {
          if (showMenu) dispatch(toggleMenu());
        }}
      >
        {isShow && <Message />}

        <Outlet />
      </div>
    </>
  );
};

export default Layout;
