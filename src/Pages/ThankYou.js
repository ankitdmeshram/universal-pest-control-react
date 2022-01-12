import React from "react";
import CTA from "../Components/CTA";

import thanks from "../Img/thank-you.png"

const ThankYou = () => {
  return (
    <>
      <div className="breadcumb" id="bread">
        <div className="text-center p-4 ">
          <h1>Thank You</h1>
        </div>
      </div>

        <div className="container text-center pt-5">
            <img src={thanks} className="img-fluid" />
        </div>


      {/* <Breadcumb /> */}
      <CTA/>
    </>
  );
};

export default ThankYou;
