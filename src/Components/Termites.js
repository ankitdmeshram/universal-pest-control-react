import React from "react";
import Sidebar from "./Sidebar";

import termite_banner from "../Img/termite-banner.png"

const Termites = () => {
  return (
    <>
      <section className="service-area" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <h1>Termite Control Service</h1>
              <img src={termite_banner} className="img-fluid pt-3 pb-3" />

              <p>
                Termites are a type of bug that feeds mostly on decaying plant
                materials and has the capacity to breakdown cellulose.
                Subterranean termites, the world's most damaging wood pest, form
                their colonies under the soil and typically make their way above
                ground to obtain wood or other cellulose sources. Subterranean
                termites will forage into dwellings from below the ground level
                all the way up to the highest point of the roof pitch in quest
                of nourishment. Termite damage to door frames, kitchen cabinets,
                staircases, and timber floors can accumulate over time.
              </p>

              <h4>Service Details</h4>

              <p>
                feet. Injecting chemical into holes and finishing of holes after
                treatment done
              </p>

              <p>
                <b>Warrenty – 1/2/3/4/5 Years*</b>
              </p>

              <p>
                <b> A) Pre– Contraction </b>– Chemical injection into foundation
                of premise and soil making holes every after 1 feet and
                treatment also depends upon type of construction. Warrenty –
                5/7/10 Years**
              </p>
              <p>
                {" "}
                <b> B) SPECIAL TUBING TREATMENT OF TERMITE </b>– Before
                Construction or during renovation Life Time Termite Free (* Min
                30-35 years)
              </p>

              <h4>Benefits :</h4>
              <ul>
                <li>
                  {" "}
                  Warranty Backed Service, free treatment of infested areas
                  during the warranty
                </li>
                <li>
                  It completely kills termites unlike regular pest control that
                  just repels them.
                </li>
                <li>
                  Highly effective, hassle-free and a safe treatment used in all
                  developed countries.
                </li>
                <li>
                  Protects infested woodwork with chemicals that will not just
                  kill the existing termites, but also
                </li>
                <li>protect it from future termite infestation</li>
              </ul>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Termites;
