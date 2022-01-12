import React from "react";
import Sidebar from "./Sidebar";
import generalpestimg from "../Img/general.jpg"

const GeneralPest = () => {
  return (
    <>
      <section className="service-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <h1>General Pest Control Service</h1>

              <img src={generalpestimg} className="img-fluid" />

              <p>
                Pests such as cockroaches , rodent , flies , bed bugs, house
                flies , fruit flies , mites , silver fish , mosquitoes , lizard
                and other crawelling insects are gradually devouring in
                residents. Universal Pest Management Services came in with
                cutting-edge pest control technologies and highly qualified
                professionals. Universal Pest Control is a company that is
                always improving its pest control technology to match the
                challenges that the cities of India. Uninversal Pest Control is
                dedicated not only to eliminating pest-related risks, but also
                to raising public awareness about pest problems and pest
                treatment.
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

              <p>
                Household pests endanger both your property and your health.
                Pests such as cockroaches, ants, spiders, and lizards spread
                disease, create discomfort, and cause social disgrace. To get
                rid of them, you'll need a professional pest control system.
                Because crawling insects can always re-infest from their
                surroundings, it is best to have the General pest control
                treatment done at regular intervals. It is recommended that the
                General pest control treatment be performed at least once every
                four months. The treatment is carried out by spraying pesticide
                into every crack and crevice of the premises in order to reach
                all concealed areas and destroy all existing insects.
              </p>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralPest;
