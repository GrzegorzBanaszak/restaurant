import React from "react";
import HomeContact from "../components/HomeContact";
import HomeMake from "../components/HomeMake";
import HomeMenu from "../components/HomeMenu";
import HomeOpen from "../components/HomeOpen";
import HomeSteps from "../components/HomeSteps";
const Home = () => {
  return (
    <>
      <HomeOpen />
      <HomeSteps />
      <HomeMenu />
      <HomeMake />
      <HomeContact />
    </>
  );
};

export default Home;
