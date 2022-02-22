import React, { useState } from "react";
import Axios from "axios";

const PopupForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    solution: "",
  });

  const url = "https://backend.universalpestcontrol.co.in/api/leads/store";

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
      <div
        className="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog two " role="document">
          <div className="modal-content">
            <div className="gs-form shadow  bg-light">
              <h3>Book Now</h3>

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

                <p style={{ textAlign: "center" }}>Or</p>

                <div className="form-group">
                  <a
                    className="btn gs-btn"
                    href="tel:+91 99097 23817"
                    style={{ color: "white", width: "100%" }}
                  >
                    Call Now{" "}
                  </a>
                </div>

                {/* <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupForm;
