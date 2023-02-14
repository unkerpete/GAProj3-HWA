import React from "react";
import image1 from "/src/Assets/firdaus/our_service/transport/Transport_icon.png";
import image2 from "/src/Assets/firdaus/our_service/transport/Transport_image.png";
import { AccordionDataTransport } from "./AccordionData";
import Accordion from "./Accordian";
import Form from "../../Components/Form";

const options = [
  "Dial-A-Ride",
  "Taxi Subsidy",
  "Medical Escort",
  "Rehabilitation Escort",
  "Career",
  "General Enquiry",
  "Fund Raising",
  "Rehabilitation Service",
  "Media & Advertising",
];

const Transport = () => {
  const accordionDataOne = AccordionDataTransport;

  return (
    <>
      <div className="flex justify-center mb-4">
        <img className="w-10 p-1" src={image1}></img>
        <h3>Transport</h3>
      </div>
      <div className="text-center px-96">
        <p className="font-DM text-xl font-normal">
          Are you concerned about getting to your rehabilitation sessions?
          <br></br>
          Do you need assistance getting to places?
          <br></br>
          <br></br>
          Our wheelchair-accessible transport services are equipped with
          hydraulic lifts, allowing you to commute to work, school or vocational
          training, hospital or rehabilitation visits, and participate in
          recreational activities with ease.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="w-1/2 m-12 " src={image2} />
      </div>
      <div className="accordion text-center">
        <h3 className="py-8 border-b-2">Types of Transport Services</h3>
        <div className="mx-48">
          <div className="accordion-list text-center">
            {accordionDataOne.map(({ title, content, image }) => (
              <Accordion title={title} content={content} image={image} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-64">
        <Form
          bgColour="bg-secondary-400"
          header="Transport Services Enquiry"
          message="Should you require any of the services above, feel free to send us a message."
          placeholder="Enquiry Type"
          options={options}
          menu
        />
      </div>
    </>
  );
};

export default Transport;
