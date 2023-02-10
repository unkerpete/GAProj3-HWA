import React from "react";
import { AccordionDataRehab } from "./AccordionData";
import rehabImage from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_image.png";
import rehabIcon from "/src/Assets/firdaus/our_service/rehabilitation/Rehabilitation_icon.png";
import Accordion from "./Accordian";

const Rehabilitation = () => {
  const accordionDataTwo = AccordionDataRehab;

  return (
    <>
      <div className="flex justify-center mb-4">
        <img className="w-10 p-1" src={rehabIcon}></img>
        <h3>Rehabilitation</h3>
      </div>
      <div className="text-center px-24">
        <p className="font-DM text-l font-normal">
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
      <div className="typesOfRehabServices">
        <h3 className= "border-b py-8 px-20 text-center">Types of Rehabilitation Services</h3>
        <p className="py-10 px-36">
          Our centres provide the following rehabilitation services:
          <br></br>
          <br></br>
          <ul> 1. Physical rehabilitation programmes for clients to improve or maintain their physical and funcational status</ul>
          <ul> 2. training on independent living skills, to enable clients to become less dependent on their caregivers</ul>
          <ul> 3. Training for caregivers on safe-handling and proper transfer of cliients, and on prevention of complications</ul>
          <ul> 4. Training on community mobiliity and exploration</ul>
          <ul> 5. Consultation and advice on purchase and proper use of assistive devices</ul>
          <ul> 6. Engagement off clients in social, recreational and community activities</ul>
          <ul> 7. Wheelchair handling training for volunteers</ul>
          <br></br>
          <br></br>
          <ul> HWA has been appointed by the Agency for integrated Care AIC to provide assessment and training service for prescribed movility devices,
            for applicatnts of the Seniors' Mobility and Enabling Fund SMF
          </ul>
        </p>
      </div>
      <div className="accordion text-center">
        <h3 className="py-8 border-b">Important information</h3>
        <div className="mx-36">
          <div className="accordion-list text-center">
            {accordionDataTwo.map(({ title, content, image }) => (
              <Accordion title={title} content={content} image={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rehabilitation;
