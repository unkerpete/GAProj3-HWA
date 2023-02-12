import React, { useState } from "react";
import rehabImage from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_image.png";
import rehabIcon from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_icon.png";

import rehabTable1 from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_Table_1.png";
import rehabMap1 from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_Map_1.png";
import rehabTable2 from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_Table_2.png";
import rehabMap2 from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_Map_2.png";
import rehabTable3 from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_Table_3.1.png";
import rehabTable4 from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_Table_3.png";

const Rehabilitation = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);

  return (
    <>
      <div className="flex justify-center mb-4">
        <img className="w-10 p-1" src={rehabIcon}></img>
        <h3>Rehabilitation</h3>
      </div>
      <div className="text-center px-96">
        <p className="font-DM text-xl font-normal">
          We operate two rehabilitation centres, located at Whampoa Drive and
          Jurong Point Shopping Centre, providing services for people with
          physical disabilities, particularly those residing at these areas.
          <br></br>
          <br></br>
          Our goal is to optimise rehabilitation potential, and enhance the
          quality of life for our clients, helping them integrate into
          mainstream society. Both centers have a fleet of wheelchair-accessible
          vehicles, ensuring convenient transportation for clients and
          caregivers to and from therapy sessions.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="w-1/2 m-12 " src={rehabImage} />
      </div>
      <div className="typesOfRehabServices text-center ">
        <h3 className=" py-8 px-20 text-center">
          Types of Rehabilitation Services
        </h3>

        <p className="py-10 px-96 text-justify font-DM text-xl font-normal">
          Our centres provide the following rehabilitation services:
          <br></br>
          <br></br>
          <ul>
            1. Physical rehabilitation programmes for clients to improve or
            maintain their physical and funcational status
          </ul>
          <ul>
            2. Training on independent living skills, to enable clients to
            become less dependent on their caregivers
          </ul>
          <ul>
            3. Training for caregivers on safe-handling and proper transfer of
            cliients, and on prevention of complications
          </ul>
          <ul> 4. Training on community mobiliity and exploration</ul>
          <ul>
            5. Consultation and advice on purchase and proper use of assistive
            devices
          </ul>
          <ul>
            6. Engagement off clients in social, recreational and community
            activities
          </ul>
          <ul> 7. Wheelchair handling training for volunteers</ul>
          <br></br>
          <br></br>
          <ul>
            HWA has been appointed by the Agency for integrated Care AIC to
            provide assessment and training service for prescribed movility
            devices, for applicatns of the Seniors' Mobility and Enabling Fund
            SMF
          </ul>
        </p>
      </div>

      <div className="accordion text-center">
        <h3 className="py-8 border-b-2">Important information</h3>
        <div className="mx-48">
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActive(!isActive)}
            >
              {/* <div className="font-DM text-xl font-normal flex justify-between"> */}
              <div className="float-left font-DM text-xl font-bold">
                Charges for Rehabilitation sessions
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActive ? "-" : "+"}
              </div>
            </div>
            {isActive && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                {/* {content} */}
                HWA's rehabilitation centres are accredited by the Ministry of
                Health (MOH) for operational subvention, as a step-down care
                provider for subsidised community rehabilitation services. The
                rehabilitation and transportation fees are based on the MOH's
                Households Means Testing (HHMT), to determine the amount of
                subsidy each client is eligible for in using these services.
                <br></br>*Any subsequent fee depends on the HHMT's evaluation.
                <br></br>*Prices indicated are subject to change without prior
                notice; transportation will be subject to availability.
                <img className=" mt-4 w-screen" src={rehabTable1} />
                <br />
                <div className="font-DM text-xl font-bold">Application</div>
                <div className="font-DM text-base font-normal">
                  To enril in HWA's Rehabilitation Programme, please complete
                  the relevant Agency for Integrated Care (AIC) Referral Form
                  <a
                    href="https://hwa.org.sg/wp-content/uploads/2018/05/AIC-Referral-Form-Community-Services.pdf"
                    className="text-blue-800"
                  >
                    {" "}
                    here
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActiveTwo(!isActiveTwo)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Whampoa Rehabilitation Centre
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActiveTwo ? "-" : "+"}
              </div>
            </div>
            {isActiveTwo && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                <div className="flex justify-between">
                  <div className="w-1/2">
                    Opening hours:
                    <br />
                    Mondays to Fridays:
                    <br />
                    9:00 am to 6.00pm
                    <br />
                    Alternate Saturdays:
                    <br />
                    9:00am to 1.00pm
                  </div>
                  <div className="w-1/2">
                    <img className=" " src={rehabMap1} />
                  </div>
                </div>
                <div className="font-DM text-xl font-bold mb-4"> Scheduled therapy sessions (Mon to Fri)</div>
                <div>
                  <img className=" " src={rehabTable2} />
                </div>
                <br />
              </div>
            )}
          </div>
          <div className="text-justify my-6 px-80">
            <div
              className="flex justify-between py-2 font-DM text-xl font-normal border-b-2"
              onClick={() => setIsActiveThree(!isActiveThree)}
            >
              <div className="float-left font-DM text-xl font-bold">
                Jurong Point Rehabilitation Centre
              </div>
              <div className="float-right font-DM text-xl font-bold text-teal-400">
                {isActiveThree ? "-" : "+"}
              </div>
            </div>
            {isActiveThree && (
              <div className="accordion contents font-DM text-base font-normal object-fill">
                <br />
                <div className="flex justify-between">
                  <div className="w-1/2">
                    Opening hours:
                    <br />
                    Mondays to Fridays:
                    <br />
                    9:00 am to 6.00pm
                    <br />
                    Currently, this centre only provides Physiotherapy 
                    <br/>and Occupational Therapy services.
                  </div>
                  <div className="w-1/2">
                    <img className=" " src={rehabMap2} />
                  </div>
                </div>
                <div className="font-DM text-xl font-bold mb-4"> Scheduled therapy sessions (Mon to Fri)</div>
                <div>
                  <img className=" " src={rehabTable3} />
                </div>
                <br />
                <div className="font-DM text-xl font-bold mb-4"> Scheduled therapy sessions (alternate Sat)</div>
                <div>
                  <img className=" " src={rehabTable4} />
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rehabilitation;
