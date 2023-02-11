import React, { Fragment } from "react";
import image1 from "../Assets/Tyler/aboutus/our_people/OrganisationalStructure.png";

const AboutGovernance = () => {
  return (
    <div>
      <h1>our people</h1>
      <section className="p-20">
        <div id="PETER-ID-GOES-HERE" className="flex ">
          <div className="w-3/12 bg-gray-300 p-4 flex-shrink-0">
            <div className=" bg-gray-400">
              <h3>About Us</h3>
              <h3>Our People</h3>
              <ul>
                <li>Board Members</li>
                <li>management</li>
                <li>
                  Organisational
                  <br /> structure
                </li>
              </ul>
            </div>
          </div>
          <div className="w-9/12 bg-gray-400 flex-grow-1">
            <section className="w-12/12  bg-gray-400 pb-20 ">
              <h3 className="text-primary-800  ">Board Members Information</h3>
              <p>(elected on AGM dated 18 September 2021)</p>
            </section>
            <Fragment>
              <div className="flex">
                <div className="w-3/12 bg-gray-300 flex-shrink-0">
                  <div>
                    <p className="text-primary-800 font-DM text-xl font-bold">
                      Er. Hui Beng Hong, PBM
                    </p>
                  </div>
                </div>
                <div className="w-3/12 bg-gray-300 flex-shrink-0">
                  <div>
                    <p className="text-primary-800 font-DM text-xl font-bold">
                      Er. Hui Beng Hong, PBM
                    </p>
                  </div>
                </div>
                <div className="w-3/12 bg-gray-300 flex-shrink-0">
                  <div>
                    <p className="text-primary-800 font-DM text-xl font-bold">
                      Er. Hui Beng Hong, PBM
                    </p>
                  </div>
                </div>
                <div className="w-3/12 bg-gray-300 flex-shrink-0">
                  <div>
                    <p className="text-primary-800 font-DM text-xl font-bold">
                      Er. Hui Beng Hong, PBM
                    </p>
                  </div>
                </div>
              </div>
            </Fragment>

            <section className="w-12/12  bg-gray-400 pb-20 ">
              <hr className=" border-t-1 pb-20 border-primary-800" />
              <h3 className="text-primary-800  ">Management</h3>
              <p> (as of March 2022)</p>
              <p className="font-DM text-3xl font-medium pt-20 text-primary-800">
                Key Personnel
              </p>
              <hr className=" border-t-1 border-primary-800 my-20" />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutGovernance;
