import React from "react";
import Accordion from "../Components/Our-Services/Accordian";
import image1 from "../Assets/firdaus/our_service/transport/Transport_icon.png";
import image2 from "../Assets/firdaus/our_service/transport/Transport_image.png";
import serviceImage from "../Assets/firdaus/our_service/services/Service_image.png";
import { AccordionDataTransport } from "../Components/AccordionData";

const OurServices = () => {
  const accordionDataOne = AccordionDataTransport;
  console.log(accordionDataOne);

  return (
    <>
      <div className="top banner">
        <div className=" flex bg-sky-100 h-100">
          <div className="my-20">
            <h1>Our Services</h1>
            <br></br>
            We empower people with physical disabilities through a range of
            programs and services including welfare assistance, social
            integration, driving instruction, and dedicated transportation
            services.
          </div>
          <div>
            <img className="my-20" src={serviceImage}></img>
          </div>
        </div>
        <div className="Subpages bg-sky-100 flex justify-between mb-10">
          <h4>Transport</h4>
          <h4>Rehabilitation</h4>
          <h4>Home Care</h4>
          <h4>Social Service</h4>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <img className="w-10 p-1" src={image1}></img>
        <h3>Transport</h3>
      </div>
      <div className="text-center px-24">
        <p className="font-DM text-l font-normal">
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
        <h3 className="mb-2 border-b">Types of Transport Services</h3>
        <div className="mx-48">
          <div className="accordion-list text-center">
            {accordionDataOne.map(({ title, content, image }) => (
              <Accordion title={title} content={content} image={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
