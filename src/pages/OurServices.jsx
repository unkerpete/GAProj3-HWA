import React, { useState } from "react";
import Accordion from "../Components/Our-Services/Accordian";
import image1 from "../Assets/firdaus/our_service/transport/Transport_icon.png";
import image2 from "../Assets/firdaus/our_service/transport/Transport_image.png";
import serviceImage from "../Assets/firdaus/our_service/services/Service_image.png";
import { AccordionDataTransport } from "../Components/Our-Services/AccordionData";
import SectionHeader from "../Components/Our-Services/SectionHeader";
import Transport from "../Components/Our-Services/Transport";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const accordionDataOne = AccordionDataTransport;
  console.log(accordionDataOne);

  return (
    <>
      <SectionHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* TabSwitching */}
      <div className="mt-20">
        {activeTab === "tab1" && (
          <div>
            <Transport/>
          </div>
        )}
      </div>
    </>
  );
};

export default OurServices;
