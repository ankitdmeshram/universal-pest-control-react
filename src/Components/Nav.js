import React from "react";

import {
  Link
} from "react-router-dom";

import img_email from '../Img/email.png'
import img_phone from '../Img/phone-call.png'
import logomain from '../Img/logo-main.png' 
import PopupForm from "./PopupForm";

const Nav = () => {
  return (
    <>
      <section className="gs-header">
        <div className="gs-top-nav container-fluid">
          <div className="container">
            <p>
              <a href="mailto:universalpestandfumigation@gmail.com">
                <img
                  src={img_email}
                  className="img-fluid"
                style={{width: "17px"}}
                />
                <span className="gs-hide">
                  {" "}
                  universalpestandfumigation@gmail.com
                </span>
              </a>
              <a href="tel:+919909723817">
                <img
                  src={img_phone}
                  className="img-fluid"
                style={{width:"17px", marginLeft: "20px"}}
                />
                <span className="gs-hide">+91 99097 23817</span>
              </a>
            </p>
          </div>
        </div>
        <div className="gs-nav " id="navbar_top">
          <nav
            className="navbar navbar-expand-lg navbar-light shadow-lg"
            style={{backgroundColor: "white"}}
          >
            <div className="container">
              <a className="navbar-brand" href="/" 
              >
                <img src={logomain} 
                style={{height: "80px"}}
                 alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse gs-nav"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <Link to="" className="nav-link gs-nav-li" >
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about" className="nav-link gs-nav-li">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="services" className="nav-link gs-nav-li" >
                      {" "}
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact" className="nav-link gs-nav-li" >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a
                      className="nav-link  gs-btn gs-btn-white"
                      href="/"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      style={{color: "white", borderRadius: "5px", padding: "5px 20px"}}
                    >
                      Hire Us{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <PopupForm />

    </>
  );
};

export default Nav;
