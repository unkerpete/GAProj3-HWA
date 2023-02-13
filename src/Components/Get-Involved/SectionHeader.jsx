import React from "react";
// import "tw-elements";
import Tabs from "./Tabs";
import getInvolvedImage from "/src/Assets/izhar/GetInvolved/GetInvolved_image.png";

const SectionHeader = () => {
  return (
    <>
      {/* MESSAGE + IMAGE */}
      <div className="grid grid-cols-2 bg-primary-200">
        <div className="p-20">
          <h3 className="text-primary-800">Get Involved</h3>
          <p className="text-primary-800 mt-8 pr-20 font-DM text-xl font-normal">
            Make a difference in the lives of people with physical disabilities
            by volunteering or donating — every contribution makes an impact.
          </p>
        </div>
        <div className="">
          <img className="p-4" src={getInvolvedImage} alt="" width="600" />
        </div>
      </div>
      {/* TABS */}
      <Tabs />
    </>
  );
};

export default SectionHeader;
