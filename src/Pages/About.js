import React from "react";
import Breadcumb from "../Components/Breadcumb";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import HomeAbout from "../Components/HomeAbout";
import Reviews from "../Components/Reviews";

import { Helmet } from "react-helmet";
import Nav from "../Components/Nav";
import Clients from "../Components/Clients";

const About = () => {
  return (
    <>



      <Helmet>
        <title>About Us - Universal Pest Control</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Universal Pest Control is a modern pest control. We are Eco-friendly Pest Control Service in India with a 30-day post-service guarantee and Protection against Damage"
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.universalpestcontrol.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Us - Universal Pest Control"
        />
        <meta
          property="og:description"
          content="Universal Pest Control is a modern pest control. We are Eco-friendly Pest Control Service in India with a 30-day post-service guarantee and Protection against Damage."
        />
        <meta property="og:url" content="https://www.universalpestcontrol.com/" />
        <meta property="og:site_name" content="Universal Pest Control" />

        <meta property="og:image:alt" content="Universal Pest Control" />
        <meta property="og:image:type" content="image/png" />
        <meta
          name="twitter:title"
          content="About Us - Universal Pest Control"
        />
        <meta
          name="twitter:description"
          content="Universal Pest Control is a modern pest control. We are Eco-friendly Pest Control Service in India with a 30-day post-service guarantee and Protection against Damage."
        />

        <meta
          name="keywords"
          content="Universal Pest Control, Pest control service, pest control, best pest control, pest control in india, best pest control in india"
        />
        <meta name="author" content="Universal Pest Control" />
      </Helmet>

      <div className="breadcumb" id="bread">
        <div className="text-center p-4 ">
          <h1>About Us</h1>
        </div>
      </div>
      {/* <Breadcumb title="he" /> */}
      <HomeAbout />




      <div className="container text-center">
        <h1>Government Approved  Firm </h1>
        <object style={{height: "70vh", width: "100%"}} data="https://universalpestcontrol.co.in/license.pdf" type="application/pdf">   </object>
      </div>






      <Reviews />
      <Clients />
      <CTA />
    </>
  );
};

export default About;
