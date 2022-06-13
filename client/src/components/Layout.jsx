import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { toggleMenu } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.menu);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <div
        onClick={() => {
          if (showMenu) dispatch(toggleMenu());
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
