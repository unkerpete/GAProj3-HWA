import React from "react";
import image1 from "/src/Assets/firdaus/our_service/homecare/Homecare_icon.png";
import image2 from "/src/Assets/firdaus/our_service/homecare/Homecare_image.png";
import { AccordionDataHomeCare } from "./AccordionData";
import Accordion from "./Accordian";

const HomeCare = () => {
  const accordionDataOne = AccordionDataHomeCare;

  return (
    <>
      <div className="flex justify-center mb-4">
        <img className="w-10 p-1" src={image1}></img>
        <h3>Home Care</h3>
      </div>
      <div className="text-center px-24">
        <p className="font-DM text-l font-normal">
          Our Home Care Services (HCS), formerly Personal Care Services, have
          been dedicated to enhancing the quality of life for elderly citizens
          and people with disabilities since April 2015. We aim to assist our
          clients in achieving maximum independence and autonomy, all the while
          adhering to our values-based culture.
          <br></br>
          <br></br>
          Our goal is to provide comprehensive care and support to individuals
          who are unable to fully care for themselves, in the comfort of their
          own homes, at times that are convenient for them, and in ways that
          align with their preferences, for as long as possible.
          <br></br>
          <br></br>
          We strive to help the client better attain:
        </p>
      </div>

      <div className="flex justify-center">
        <img className="w-3/4 m-12 " src={image2} />
      </div>

      <div className="typesOfRehabServices">
        <h3 className="border-b py-8 px-20 text-center">How it Works</h3>
        <p className="py-10 px-36 text-center">
          Our home-based health care program offers a range of services
          including case management, medication management, counselling,
          therapy, personal and social care, transportation, and community
          integration services.Our nurses conduct a comprehensive assessment of
          each client to determine their specific health and psychosocial needs.
          <br></br>
          <br></br>
          Our goal is to support the elderly and adults with physical
          disabilities in remaining in their own homes, while providing
          affordable nursing care that includes long-term basic domestic care,
          mentally stimulating activities, medication reminders, and assistance
          with personal care and hygiene, to enhance their overall quality of
          life.
        </p>
      </div>
      <div className="accordion text-center">
        <h3 className="py-8 border-b">Types of Home Care Services</h3>
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

export default HomeCare;
