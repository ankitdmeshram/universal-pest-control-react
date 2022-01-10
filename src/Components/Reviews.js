import React from "react";

import stars from "../Img/stars.png";
import profile from "../Img/profile1.jpg"

const Reviews = () => {
  return (
    <>
      <section className="four">
        <div className="container text-center">
          <h1>Review & Testimonials</h1>
          <h3>Top Reviews</h3>

          <div className="row pt-5 pb-5">
            <div className="col-lg-4">
              <div className="box shadow text-center">
                <img src={stars} alt="stars" className="img-fluid" />
                <p>
                  "I use this company since 2018. Will recommend. As they give
                  warranty and they are coming on time for first time and second
                  and third if needed. Just we have to be patient This insects
                  are stronger then human)).
                </p>
                <h5>Munna Belwad</h5>
                <img
                  src={profile}
                  alt="img"
                  className="img-fluid gs-img"
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box shadow text-center">
                <img src={stars} alt="stars" className="img-fluid" />

                <p>
                  "Got to hear about the service about our community facebook
                  group. Professional service and haven't seen any roaches after
                  their service. They provide 6 months guarantee as well.
                </p>
                <h5>Sanjay Verma</h5>
                <img
                  src={profile}
                  alt="img"
                  className="img-fluid gs-img"
                />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="box shadow text-center">
                <img src={stars} alt="stars" className="img-fluid" />

                <p>
                  "Great service and I’m very happy customer since the past 3
                  years I won’t use any other company.
                </p>
                <h5>Shweta Chande</h5>
                <img
                  src={profile}
                  alt="img"
                  className="img-fluid gs-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;
