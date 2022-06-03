import React from "react";
import HomeMake from "./HomeMake";
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
      <HomeMake />
    </>
  );
};

export default Home;
