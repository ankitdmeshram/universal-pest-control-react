import React, { useState } from "react";
import Axios from "axios";


import money_back from '../Img/money-back.webp'

const Sidebar = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    solution: "",
  });

  const url = "https://backend.leadpest.com/api/leads/store";

  const submit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      solution: data.solution,
    }).then((res) => {
      console.log(res.data);
      if (res.data === "inquiry submitted") {
        // alert("success");
        window.location.replace("/thank-you");
      }
    });
  };

  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData)
  };



  return (
    <>
      <div className="col-lg-4 two">
        <div className="sticky-top form-box">
          <div className="gs-form shadow ">
            <h3>Get a Quote</h3>

            <form onSubmit={(e) => submit(e)}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={data.name}
                      id="name"
                      onChange={(e) => handle(e)}
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
                          id="phone"
                          value={data.phone}
                          onChange={(e) => handle(e)}
                        />
                      </div>
                      <div className="col">
                        <label>Email Id</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          value={data.email}
                          id="email"
                          onChange={(e) => handle(e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col">
                        <label>Solution</label>
                        <select
                          value={data.solution}
                          id="solution"
                          onChange={(e) => handle(e)}
                          className="form-control"
                        >
                          <option>General Pest Control</option>
                          <option>Cockroaches</option>
                          <option>Ants</option>
                          <option>Termites</option>
                          <option>Bed Bugs</option>
                          <option>Rodents</option>
                          <option>Ticks</option>
                          <option>Mosquitoes</option>
                          <option>Bird Spike</option>
                        <option>Bird Net</option>
                        </select>
                      </div>
                      <div className="col">
                        <label>City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          placeholder="City"
                          value={data.city}
                          id="city"
                          onChange={(e) => handle(e)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn gs-btn"
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
