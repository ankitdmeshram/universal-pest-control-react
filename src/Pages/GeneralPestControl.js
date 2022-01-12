import React from "react";
import { Helmet } from "react-helmet";
import Breadcumb from "../Components/Breadcumb";
import CTA from "../Components/CTA";
import GeneralPest from "../Components/GeneralPest";

const GeneralPestControl = () => {
  return (
    <>


      <Helmet>
        <title>
          General Pest Service - Universal Pest Control
        </title>
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
          content="General Pest Service - Universal Pest Control"
        />
        <meta
          property="og:description"
          content="Universal Pest Control is a modern pest control. We are Eco-friendly Pest Control Service in India with a 30-day post-service guarantee and Protection against Damage."
        />
        <meta
          property="og:url"
          content="https://www.universalpestcontrol.com/"
        />
        <meta property="og:site_name" content="Universal Pest Control" />

        <meta property="og:image:alt" content="Universal Pest Control" />
        <meta property="og:image:type" content="image/png" />
        <meta
          name="twitter:title"
          content="General Pest Service - Universal Pest Control"
        />
        <meta
          name="twitter:description"
          content="Universal Pest Control is a modern pest control. We are Eco-friendly Pest Control Service in India with a 30-day post-service guarantee and Protection against Damage."
        />

        <meta
          name="keywords"
          content="Universal Pest Control, general pest service, Pest control service, pest control, best pest control, pest control in india, best pest control in india"
        />
        <meta name="author" content="Universal Pest Control" />
      </Helmet>


      <div className="breadcumb" id="bread">
        <div className="text-center p-4 ">
          <h1>General Pest Control</h1>
        </div>
      </div>

      {/* <Breadcumb /> */}
      <GeneralPest />
      <CTA />
    </>
  );
};

export default GeneralPestControl;
