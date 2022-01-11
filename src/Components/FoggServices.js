import React from "react";
import Sidebar from "./Sidebar";

const FoggServices = () => {
  return (
    <>
      <section class="service-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <h1>Fogging Services For mosquito</h1>

              <p>
                Mosquitoes are said to be the most harmful creatures on the
                earth, killing about one million people each year. Malaria,
                dengue fever, chikungunya, yellow fever, and other serious
                mosquito-borne illnesses are among the most serious. When a
                mosquito bites someone, it sucks out any germs or viruses that
                are present in the person's body. These germs and viruses can be
                passed on to the next person bitten by the mosquito. As a
                result, getting rid of mosquitos from your property with the aid
                of experienced mosquito control service providers is
                unavoidable.
              </p>

              <p>
                We use an electric mist sprayer and an advanced equipment to
                spray a chemical solution "uniformly" on the surface of
                walls/roofs/breeding areas, etc., to prevent mosquitos from
                reproducing both inside and outdoors. This is a genuine, tested,
                and proven remedy with a minimum efficacy of 3 months and a
                maximum effectiveness of 6 months. Bayer Corp Science chemicals
                are HACCP certified and WHO rated. It also replants lizards,
                cockroaches, and flies in some circumstances.
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

export default FoggServices;
