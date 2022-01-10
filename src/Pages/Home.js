import React from "react";
import Footer from "../Components/Footer";
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
      <Footer />
    </>
  );
};

export default Home;
