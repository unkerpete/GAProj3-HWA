import React from "react";

const SectionHeader = () => {
  return (
    <div className="grid grid-cols-2 bg-primary-200">
      <div className="p-20">
        <h3 className="text-primary-800">Get Involved</h3>
        <p className="text-primary-800 mt-8 pr-20 font-DM text-xl font-normal">
          Make a difference in the lives of people with physical disabilities by
          volunteering or donating — every contribution makes an impact.
        </p>
      </div>

      <div className="">IMAGE HERE YO</div>
      <div className="text-center">
        <button className="" type="submit">
          Make a Donation
        </button>
      </div>
      <div>
        <button className="" type="submit">
          Become a Volunteer
        </button>
      </div>
    </div>
  );
};

export default SectionHeader;
