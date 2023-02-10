import React, { useState } from "react";
import { AccordionDataTransport } from "../Components/Our-Services/AccordionData";
import SectionHeader from "../Components/Our-Services/SectionHeader";
import Transport from "../Components/Our-Services/Transport";
import Rehabilitation from "../Components/Our-Services/Rehabilitation";
import HomeCare from "../Components/Our-Services/HomeCare";
import SocialService from "../Components/Our-Services/SocialService";


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
        {activeTab === "tab2" && (
          <div>
            <Rehabilitation/>
          </div>
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

      </div>
    </>
  );
};

export default OurServices;