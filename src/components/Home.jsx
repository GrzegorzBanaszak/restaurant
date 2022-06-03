import React from "react";
import HomeMenu from "./HomeMenu";
import HomeOpen from "./HomeOpen";
import HomeSteps from "./HomeSteps";
import NavMobile from "./NavMobile";

const Home = () => {
  return (
    <>
      <NavMobile />
      <HomeOpen />
      <HomeSteps />
      <HomeMenu />
    </>
  );
};

export default Home;
