import React from "react";
import image1 from "/src/Assets/firdaus/our_service/socialservice/Socialservice_icon.png";
import image2 from "/src/Assets/firdaus/our_service/socialservice/Socialservice_image.png";
import { AccordionDataSocialService } from "./AccordionData";
import Accordion from "./Accordian";

const SocialService = () => {
  const accordionDataOne = AccordionDataSocialService;

  return (
    <>
      <div className="flex justify-center mb-4">
        <img className="w-10 p-1" src={image1}></img>
        <h3>Social Service</h3>
      </div>
      <div className="text-center px-24">
        <p className="font-DM text-l font-normal">
          Our organization aims to enhance the quality of life for people with
          physical disabilities by encouraging their full potential and
          participation in activities.
          <br></br>
          <br></br>
          We assist members in accessing various assistance schemes and
          services, and collaborate with other organizations and government
          agencies to meet the needs of individuals and families. We work with
          community hospitals, nursing homes and the Ministry of Community
          Development, Youth and Sports (MCYS) to improve the effectiveness of
          their programs.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="w-1/2 m-12 " src={image2} />
      </div>
      <div className="accordion text-center">
        <h3 className="py-8 border-b">Types of Social Services</h3>
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

export default SocialService;
