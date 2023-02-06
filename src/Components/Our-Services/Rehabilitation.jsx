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
        <p>
          Our centres provide the following rehabilitation services:
          <br></br>
        </p>
      </div>
      <div className="accordion text-center">
        <h3 className="py-8 border-b">Important information</h3>
        <div className="mx-48">
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
