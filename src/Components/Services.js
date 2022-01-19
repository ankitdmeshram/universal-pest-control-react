import React from "react";
import {
  Link
} from "react-router-dom";


import birdji from '../Img/birdsji.png';
import fogging from '../Img/fogging.png';
import general_service from '../Img/general_service.png';
import sanitizationji from '../Img/sanitizationji.png';
import termite_control from '../Img/termite-control.png';

const Services = () => {
  return (
    <>
      <section className="three">
        <div className="container">
          <div className="text-center">
            <h1>Our Services</h1>
            <h5>World's best tourist destinations</h5>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img
                  src={termite_control}
                  className="img-fluid gs-dest-box"
                />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/termite-control"> Termite control</Link>
                    {/* <!-- <span className="gs-dest-right"
                    ><small>3 Day - Rs.50,000</small></span
                  > --> */}
                  </h5>
                  <p>
                    To stop and prevent the movement of termites from the
                    ground, holes are drilled from inside your premises …
                  </p>
                  <p>
                    &nbsp;
                    {/* <!-- <a href="#" className="btn gs-btn">Read More</a> --> */}
                    <span>
                      <a
                        href="#contact"
                        className="btn gs-btn"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Book Now
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img
                  src={general_service}
                  className="img-fluid gs-dest-box"
                />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/general-pest-control">
                      {" "}
                      General Pest Services
                    </Link>

                    {/* <!-- <span className="gs-dest-right"
                    ><small>3 Day - Rs.50,000</small></span
                  > --> */}
                  </h5>
                  <p>
                    Pests like mosquitoes, flies, cockroaches, rats, fleas,
                    bedbugs, rats, termites, lizards are slowly destroying..
                  </p>
                  <p>
                    &nbsp;
                    {/* <!-- <a href="#" className="btn gs-btn">Read More</a> --> */}
                    <span>
                      <a
                        href="#contact"
                        className="btn gs-btn"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Book Now
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={fogging} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/fogging-services-mosquitoes">
                      {" "}
                      Fogging Services
                    </Link>
                    {/* <!-- <span className="gs-dest-right"
                    ><small>3 Day - Rs.50,000</small></span
                  > --> */}
                  </h5>
                  <p>
                    To stop and prevent the grow of mosquitoes from the home,
                    your area are will fogg with your premises.
                  </p>
                  <p>
                    &nbsp;
                    {/* <!-- <a href="#" className="btn gs-btn">Read More</a> --> */}
                    <span>
                      <a
                        href="#contact"
                        className="btn gs-btn"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Book Now
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img
                  src={sanitizationji}
                  className="img-fluid gs-dest-box"
                />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/sanitization"> Sanitization</Link>
                    {/* <!-- <span className="gs-dest-right"
                    ><small>3 Day - Rs.50,000</small></span
                  > --> */}
                  </h5>
                  <p>
                    It's Crucial To Sanitize Your Home Or Business Against All
                    Threats. Bring Yourself Safety With Our Affordable Service{" "}
                  </p>
                  <p>
                    &nbsp;
                    {/* <!-- <a href="#" className="btn gs-btn">Read More</a> --> */}
                    <span>
                      <a
                        href="#contact"
                        className="btn gs-btn"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Book Now
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="dest-box shadow">
                <img src={birdji} className="img-fluid gs-dest-box" />
                <div className="dest-box-content">
                  <h5>
                    <Link to="/birds-control"> Birds Control</Link>
                    {/* <!-- <span className="gs-dest-right"
                    ><small>3 Day - Rs.50,000</small></span
                  > --> */}
                  </h5>
                  <p>
                    Birds may be beneficial, neutral or harmful to man's
                    interests, depending upon time, location and activity, and
                    certain...
                  </p>
                  <p>
                    &nbsp;
                    {/* <!-- <a href="#" className="btn gs-btn">Read More</a> --> */}
                    <span>
                      <a
                        href="#contact"
                        className="btn gs-btn"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Book Now
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
