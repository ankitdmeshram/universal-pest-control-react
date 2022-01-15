import React from "react";

import one from "../Img/Clients/1.svg";
import two from "../Img/Clients/2.svg";
import three from "../Img/Clients/3.svg";
import four from "../Img/Clients/4.svg";
import five from "../Img/Clients/5.svg";
import six from "../Img/Clients/6.svg";
import seven from "../Img/Clients/7.svg";
import eight from "../Img/Clients/8.svg";
import nine from "../Img/Clients/9.svg";
import ten from "../Img/Clients/10.svg";
import eleven from "../Img/Clients/11.svg";
import twelve from "../Img/Clients/12.svg";

const Clients = () => {
  return (
    <>
      <section className="gs-clients bg-light pt-5 pb-5">
        <div className="container">
          <div>
            <h1 className="text-center" style={{ fontWeight: "bold" }}>
              Our Clients
            </h1>

            <marquee behavior="" direction="" scrollamount="12">
              <img src={one} className="img-fluid" />
              <img src={two} className="img-fluid" />
              {/* <img src={three} className="img-fluid" /> */}
              <img src={four} className="img-fluid" />
              <img src={five} className="img-fluid" />
              <img src={six} className="img-fluid" />
              <img src={seven} className="img-fluid" />
              <img src={eight} className="img-fluid" />
              <img src={nine} className="img-fluid" />
              <img src={ten} className="img-fluid" />
              <img src={eleven} className="img-fluid" />
              <img src={twelve} className="img-fluid" />
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
