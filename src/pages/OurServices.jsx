import React, { useState, useContext } from "react";
import { AccordionDataTransport } from "../Components/Our-Services/AccordionData";
import SectionHeader from "../Components/Our-Services/SectionHeader";
import Transport from "../Components/Our-Services/Transport";
import Rehabilitation from "../Components/Our-Services/Rehabilitation";
import HomeCare from "../Components/Our-Services/HomeCare";
import SocialService from "../Components/Our-Services/SocialService";
import tabContext from "../context/tabContext";

const OurServices = () => {
  const tabCtx = useContext(tabContext);

  const accordionDataOne = AccordionDataTransport;
  console.log(accordionDataOne);

  return (
    <>
      <SectionHeader />
      {/* TabSwitching */}
      <div className="mt-20">
        {tabCtx.ourServiceActiveTab === "tab1" && (
          <div>
            <Transport />
          </div>
        )}
        {tabCtx.ourServiceActiveTab === "tab2" && (
          <div>
            <Rehabilitation />
          </div>
        )}
        {tabCtx.ourServiceActiveTab === "tab3" && (
          <div>
            <HomeCare />
          </div>
        )}
        {tabCtx.ourServiceActiveTab === "tab4" && (
          <div>
            <SocialService />
          </div>
        )}
      </div>
    </>
  );
};

export default OurServices;
