import React from "react";
import Breadcumb from "../Components/Breadcumb";
import CTA from "../Components/CTA";
import MainContact from "../Components/MainContact";
import Map from "../Components/Map";
import Reviews from "../Components/Reviews";

const Contact = () => {
  return (
    <>
      <Breadcumb title="he" />
      <MainContact />
      <Map />
      <Reviews />

      <CTA />
    </>
  );
};

export default Contact;
