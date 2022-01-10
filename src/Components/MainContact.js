import React from "react";

const MainContact = () => {
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
                <img className="img-fluid" src="icon/location-b.png" /> &nbsp;
                ward no.6/A,Near DAV School, VFS Market,office no 60,Adipur
                Gandhidham(KUTCH) 370 205
              </p>
              <p>
                {" "}
                <a href="tel:+919909723817">
                  {" "}
                  <img className="img-fluid" src="icon/phone-call-b.png" />{" "}
                  &nbsp; +91 99097 23817{" "}
                </a>
              </p>
              <p>
                {" "}
                <a href="mailto:universalpestandfumigation@gmail.com">
                  <img className="img-fluid" src="icon/mail.png" /> &nbsp;
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
                          type="text"
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
                      style={{width: "100%"}}
                    />
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
