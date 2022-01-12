import React from "react";
import Sidebar from "./Sidebar";

import bird from "../Img/birdsji.png";

const Birds = () => {
  return (
    <>
      <section class="service-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <h1>Birds Removal Service</h1>

              <img src={bird} className="img-fluid pt-3 pb-3" />

              <p>
                Birds can be beneficial, neutral, or destructive to man's
                interests depending on the time, place, and activity, and
                particular birds (sparrows, woodpeckers, waterfowl, pigeons, and
                black birds) are more likely to become pests and require bird
                proofing and bird control.
              </p>

              <p>
                To prevent an infestation or damage to your home, nesting spots
                must be eliminated, and points of entry need to be sealed. Tree
                branches can act as shelter or a place for birds to build a
                nest. And even though they can fly, branches can also act as an
                easier way for birds to access the roofline. Keeping the limbs
                trimmed back can act as a deterrent but isn’t the total
                solution.
              </p>

              <h4>Benefits :</h4>
              <ul>
                <li>
                  {" "}
                  Warranty Backed Service, free treatment of infested areas
                  during the warranty
                </li>

                <li>
                  Highly effective, hassle-free and a safe treatment used in all
                  developed countries.
                </li>

                <li>protect it from future infestation</li>
              </ul>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Birds;
