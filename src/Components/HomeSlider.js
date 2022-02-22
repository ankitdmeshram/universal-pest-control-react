import React from "react";

import slides from '../Img/slider-2.png'

const HomeSlider = () => {
  return (
    <>
      <section className="gs-hero">
        <div
          className="container-fluid"
          style={{paddingRight: "0", paddingLeft: "0"}}
        >
          <div
            id="carouselExampleControls"
            data-interval="3000"
            className="carousel slide gs-hero-slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="gs-hero-box text-center"
                //  style={{    background: "linear-gradient(rgba(250, 0, 0, 0.5), rgba(0, 0, 0, 0.5))", backgroundImage: "`url(${slides})` "}}
                // style={{ backgroundImage: `url(${slides})`, background: "linear-gradient(rgba(250, 0, 0, 0.5), rgba(0,0,0,0.5))"}}

            
                 >
                  <h1>Pest Control Sevices</h1>
                  <p>We know how to protect your family!</p>
                  <a
                    href="#contact"
                    className="btn gs-btn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                <div className="gs-hero-box gs-hero-box-1 text-center">
                  <h1  >Dengue & chikungunya <br></br> Mosquito Treatment</h1>
                  <p>100% Free from Bacteria</p>
                  <a
                    href="#contact"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    className="btn gs-btn btn-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSlider;


const sliderimg = {

};