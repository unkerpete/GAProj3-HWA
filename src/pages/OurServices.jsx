<<<<<<< Updated upstream
import React from "react";
import Accordion from "../Components/Our-Services/Accordian";
import transportTable from "../Assets/firdaus/our_service/transport/Transport_Table.png";
import image1 from "../Assets/firdaus/our_service/transport/Transport_icon.png";
import image2 from "../Assets/firdaus/our_service/transport/Transport_image.png";
import serviceImage from "../Assets/firdaus/our_service/services/Service_image.png";
=======
import React, { useState } from "react";
import { AccordionDataTransport } from "../Components/Our-Services/AccordionData";
import SectionHeader from "../Components/Our-Services/SectionHeader";
import Transport from "../Components/Our-Services/Transport";
import Rehabilitation from "../Components/Our-Services/Rehabilitation";
import HomeCare from "../Components/Our-Services/HomeCare";
import SocialService from "../Components/Our-Services/SocialService";

>>>>>>> Stashed changes

// import AccordionDataTransport from "../Components/Our-Services/AccordionData";

const OurServices = () => {
  const accordionDataTransport = [
    {
      title: "Dial-A-Ride",
      content: `This scheme offers a convenient door-to-door transportation service for individuals with physical disabilities (PWDs) and the frail elderly, who may have difficulty using traditional public transportation. Our specially equipped mini-buses feature wheelchair accessibility, providing safe and reliable transportation for clients. Additionally, clients can book ad-hoc door-to-door trips in advance to meet their specific needs.`,
      image: transportTable,
    },
    {
      title: "Taxi Subsidy",
      content: `Our scheme provides discounted transportation for people with physical disabilities to and fro from their workplaces and educational institutions. To learn more about eligibility and how to apply, please click here.`,
    },
    {
      title: "Medical Escort",
      content: `Since 2014, HWA has embarked on Medical Escort Transport (MET) service through Ministry of Health (MOH) subvention programme for our clients with medical appointments and especially to cater to the needs of PWDs and/or frail elderly who has little or no caregiver support and unable to utilise public transport. Our dedicated fleets of vehicles are deployed to cover central and western region of Singapore.`,
    },
    {
      title: "Rehabilitation Escort",
      content: `This scheme provides a door-to-door service, to ferry our clients to either of our two Rehabilitation Centres (at Whampoa and Jurong Point) on a daily basis.`,
    },
    {
      title: "AIC Centralised",
      content: `In partnership with Agency for Integrated Care (AIC), HWA is providing two-way transport service for clients participating in daycare facilities/centres within the central Regional Health System (RHS) area particularly cluster 8 of Singapore (includes, Toa Payoh, Whampoa and Novena).`,
    },
    {
      title: "MSDF Dedicated Transport for PWDs",
      content: `A dedicated transport assisted by Ministry of Social and Family Development (MSF) through a grant to serve PWDs in attending disability-linked services such as the Early Intervention Programme for Infants and Children (EIPIC) programme, Special Education (SPED) Schools, Day Activity Centres (DACs) and Sheltered Workshops. HWA aims to improve the quality and efficiency of the dedicated transport service for these groups.`,
    },
    {
      title: "Chartered Service",
      content: `Enables external organization that includes both profit or non-profit, and other Social Service Organisation to charter our vehicles and transport their clients who are PWDs or elderly for their outings and activities. Also we are working with travel agencies specializing Accessible Tourism.`,
    },
    {
      title: "Driving Instruction",
      content: `This service aims to improve the mobility and independence of PWDs with driving license. Enabling PWDs to operate their own vehicle with modifications either electronic or mechanical gadgets, these gadgets can be fitted onto most vehicles that are certified and approved by the Land Transport Authority (LTA).

      Clients must undergo Driving Assessment and Rehabilitation Programme (DARP) conducted by Tan Tok Seng Hosptal (TTSH) or Ng Teng Fong General Hospital (NTFGH). Lessons and examinations are conducted in ComfortDelGro Driving Centre in Ubi and Singapore Safety Driving Centre in Woodlands Industrial Park.`,
    },
    {
      title: "Assistive Gadget for Sale",
      content: `We sell assistive devices to help drivers with disabilities in operating their vehicle, either electronic or mechanical gadgets such as hand-controlled gadget, left foot accelerator (for manipulating the car’s accelerator and brake pedals), and steering knobs (which can be fixed onto the steering wheel, allowing drivers with a weak grip to steer the vehicle with ease).`,
    },
  ];
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
<<<<<<< Updated upstream
        </div>
        <div className="Subpages bg-sky-100 flex justify-between mb-10">
          <h3>Transport</h3>
          <h3>Rehabilitation</h3>
          <h3>Home Care</h3>
          <h3>Social Service</h3>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <img className="w-8" src={image1}></img>
        <p>Transport</p>
      </div>
      <div className="text-center">
        <p>
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
      <div>
        <img className="w-1/2 m-12" src={image2} />
      </div>
      <div className="accordion text-center">
        <h3 className="mb-2 border-b">Types of Transport Services</h3>
=======
        )}
        {activeTab === "tab3" && (
          <div>
            <HomeCare/>
          </div>
        )}
        {activeTab === "tab4" && (
          <div>
            <SocialService/>
          </div>
        )}
>>>>>>> Stashed changes

        <div className="accordion-content text-center w-1/2">
          {accordionDataTransport.map(({ title, content, image }) => (
            <Accordion title={title} content={content} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
