import React from "react";
// import "tw-elements";
import Tabs from "./Tabs";
import ourServicesImage from "/src/Assets/firdaus/our_service/services/Service_image.png";

const SectionHeader = ({ setActiveTab, activeTab }) => {
  return (
    <>
      {/* MESSAGE + IMAGE */}
      <div className="grid grid-cols-2 bg-secondary-200">
        <div className="p-36">
          <h1 className="text-primary-800">Our Services</h1>
          <p className="text-primary-800 mt-8 pr-80  font-DM text-xl font-normal">
          We empower people with physical disabilities through a range of
            programs and services including welfare assistance, social
            integration, driving instruction, and dedicated transportation
            services.
          </p>
        </div>
        <div className="">
          <img className="p-8" src={ourServicesImage} alt="" width="700" />
        </div>
      </div>
      {/* TABS */}
      <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
    </>
  );
};

export default SectionHeader;
