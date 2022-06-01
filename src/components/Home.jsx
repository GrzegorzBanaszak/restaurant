import React from "react";
import HomeOpen from "./HomeOpen";
import HomeSteps from "./HomeSteps";
import NavMobile from "./NavMobile";

const Home = () => {
  return (
    <>
      <NavMobile />
      <HomeOpen />
      <HomeSteps />
    </>
  );
};

export default Home;
