import React from "react";
import HomeContact from "./HomeContact";
import HomeMake from "./HomeMake";
import HomeMenu from "./HomeMenu";
import HomeOpen from "./HomeOpen";
import HomeSteps from "./HomeSteps";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <HomeOpen />
      <HomeSteps />
      <HomeMenu />
      <HomeMake />
      <HomeContact />
    </>
  );
};

export default Home;
