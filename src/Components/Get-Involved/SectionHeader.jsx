import React from "react";

const SectionHeader = ({ toggleTab }) => {
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
        <div className="">IMAGE HERE YO</div>
      </div>
      {/* TABS */}
      <div className="grid grid-cols-2 bg-primary-200 text-center mb-20">
        <div
          className="p-4 font-DM text-xl font-normal border-transparent hover:border-[#2b4435]"
          onClick={() => toggleTab(1)}
        >
          Make a Donation
        </div>
        <div
          className="p-4 font-DM text-xl font-normal border-transparent hover:border-[#2b4435]"
          onClick={() => toggleTab(2)}
        >
          Become a Volunteer
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
