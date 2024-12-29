import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellers from "../components/BestSellers";
import NewsLetterBox from "../components/NewsLetterBox";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <LatestCollection />
      <BestSellers />
      <NewsLetterBox />
    </>
  );
};

export default Home;
