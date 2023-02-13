import React from "react";
// need to import icons
import VolunteerIcon from "/src/Assets/izhar/Volunteer/Volunteer_icon.png";
const Volunteers = () => {
  return (
    <div>
      <div className="flex justify-center pb-4 mt-36">
        <img className="w-10 p-1" src={VolunteerIcon}></img>
        <h3 className="text-primary-800">Volunteers</h3>
      </div>
      <div className="flex flex-col text-center px-80 text-xl font-normal">
        <p className="text-primary-800">
          Volunteers are a key cornerstone of HWA, and we would not have made it
          this far without your sincere and precious contributions. Your gift
          will enable and support individuals with physical challenges as well
          as their family caregivers through HWA's rehabilitation, home care,
          and transport programmes and services.
        </p>
        <p className="text-primary-800 py-4">
          Our volunteering programmes take on many forms, and you can choose the
          activity that best fits you from the list below.
        </p>
        <p className="text-primary-800">
          We are always open to suggestions to how you or your organisation
          would like to contribute to the people who need it the most.
        </p>
        <p className="text-primary-800">
          Simply drop us a note in the form below!
        </p>
      </div>
    </div>
  );
};

export default Volunteers;
