import React from "react";
import CTA from "../Components/CTA";
import HomeAbout from "../Components/HomeAbout";
import HomeSlider from "../Components/HomeSlider";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeAbout />
      <Services />
      <Reviews />
      <CTA />
    </>
  );
};

export default Home;
