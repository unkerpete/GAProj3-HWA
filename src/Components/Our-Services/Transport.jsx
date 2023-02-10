import React from 'react';
import image1 from "/src/Assets/firdaus/our_service/transport/Transport_icon.png"
import image2 from "/src/Assets/firdaus/our_service/transport/Transport_image.png"
import { AccordionDataTransport } from "./AccordionData"
import Accordion from './Accordian';

const Transport = () => {
    const accordionDataOne = AccordionDataTransport;

    return (
        <>
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
        <h3 className="py-8 border-b">Types of Transport Services</h3>
        <div className="mx-36">
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

export default Transport;