import React from "react";

import money_back from '../Img/money-back.webp'

const Sidebar = () => {
  return (
    <>
      <div className="col-lg-4 two">
        <div className="sticky-top form-box">
          <div className="gs-form shadow ">
            <h3>Get a Quote</h3>

            <form action="">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="col">
                    <label>Email Id</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <label>Solution</label>
                    <select name="solution" className="form-control">
                      <option>General Pest Control</option>
                      <option>Cockroaches</option>
                      <option>Ants</option>
                      <option>Termites</option>
                      <option>Bed Bugs</option>
                      <option>Rodents</option>
                      <option>Ticks</option>
                      <option>Mosquitoes</option>
                    </select>
                  </div>
                  <div className="col">
                    <label>City</label>
                    <input
                      type="number"
                      className="form-control"
                      name="city"
                      placeholder="Your City"
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Find Now"
                  className="btn gs-btn btn-lg"
                  style={{ width: "100%" }}
                />
              </div>
            </form>
          </div>
          <p style={{ textAlign: "center", paddingTop: "25px" }}>
            <img src={money_back} className="img-fluid text-center" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
