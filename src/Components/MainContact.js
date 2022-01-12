import React, { useState } from "react";
import Axios from "axios";

import location_b from '../Img/location-b.png';
import phone_call from '../Img/phone-call-b.png';
import mailji from '../Img/mail.png';


const MainContact = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    solution: ""
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
      <section className="main-contact">
        <div className="container">
          <div className="row shadow p-3 pt-5 pb-5">
            <div className="col-lg-6">
              <h3>
                {" "}
                <b> Contact Us </b>{" "}
              </h3>

              <p>
                Contact us today for your free quote. Our team of specialized
                pest exterminators are ready to help you today.
              </p>

              <p className="pt-3">
                {" "}
                <img className="img-fluid" src={location_b} /> &nbsp;
                ward no.6/A,Near DAV School, VFS Market,office no 60,Adipur
                Gandhidham(KUTCH) 370 205
              </p>
              <p>
                {" "}
                <a href="tel:+919909723817">
                  {" "}
                  <img className="img-fluid" src={phone_call} />{" "}
                  &nbsp; +91 99097 23817{" "}
                </a>
              </p>
              <p>
                {" "}
                <a href="mailto:universalpestandfumigation@gmail.com">
                  <img className="img-fluid" src={mailji} /> &nbsp;
                  universalpestandfumigation@gmail.com{" "}
                </a>{" "}
              </p>
            </div>

            <div className="col-lg-6">
              <div>
                <h3>
                  {" "}
                  <b> Get a Quote </b>{" "}
                </h3>

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
                      <select  value={data.solution}
                        id="solution"

                        onChange={(e) => handle(e)} className="form-control">
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
                        type="text"
                        className="form-control"
                        name="city"
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
                 
                <p style={{textAlign: "center"}}>Or</p>

                <div className="form-group">
                  <a
                     className="btn gs-btn"
                     style={{color: "white", width: "100%"}}
                  >Call Now </a>
                </div>

              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContact;
