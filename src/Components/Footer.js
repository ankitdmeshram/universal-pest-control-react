import React from "react";

import location from "../Img/location.png";
import phone from "../Img/phone-call.png";
import email from "../Img/email.png";
import { Link } from "react-router-dom";

// import upcwhite from "../Img/upc-white.png"
import upcwhite from "../Img/logo-old-white.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img src={upcwhite} className="img-fluid" />
              <p>
              <a href="https://universalpestcontrol.co.in/" style={{color: "white"}} > Universal Pest Control and Fumigation Services</a> established in 2019 with sole interest
                in pest management business in India.
              </p>
            </div>

            <div className="col-lg-4 gs-pl-4">
              <div className="gs-pl-4">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link to="termite-control"> Termite control</Link>
                  </li>
                  <li>
                    <Link to="general-pest-control">
                      General Pest Services
                    </Link>
                  </li>
                  <li>
                    <Link to="fogging-services-mosquitoes">
                      Fogging Services
                    </Link>
                  </li>
                  <li>
                    <Link to="sanitization">Sanitization</Link>
                  </li>
                  <li>
                    <Link to="birds-control">Birds Control</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 gs-pl-4">
              <h4>Contacts</h4>
              <p className="pt-3">
                {" "}
                <img
                  src={location}
                  className="img-fluid ico"
                  alt="phone"
                />
                &nbsp; ward no.6/A,Near DAV School, VFS Market,office no
                60,Adipur Gandhidham(KUTCH) 370 205
              </p>
              <p>
                {" "}
                <a href="tel:+919909723817">
                  {" "}
                  <img
                    src={phone}
                    className="img-fluid ico"
                    alt="phone"
                  />
                  &nbsp; +91 99097 23817
                </a>
              </p>
              <p>
                {" "}
                <a href="mailto:universalpestandfumigation@gmail.com">
                  {" "}
                  <img
                    src={email}
                    className="img-fluid ico"
                    alt="phone"
                  />{" "}
                  &nbsp; universalpestandfumigation@gmail.com{" "}
                </a>
              </p>
            </div>
          </div>

          <div className="row pt-3">
              <div className="col-12 text-center">
                <p style={{fontSize: "20px", fontWeight: "500"}}>Website Designed By <a href="https://brokod.com" target="_blank" style={{color: "white"}}> Brokod </a> </p>
              </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;