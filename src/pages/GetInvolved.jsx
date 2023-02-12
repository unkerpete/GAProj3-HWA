import React, { useState } from "react";
import SectionHeader from "../Components/Get-Involved/SectionHeader";
import Form from "../Components/Get-Involved/Form";
import PictureCards from "../Components/Get-Involved/PictureCards";
import Volunteers from "../Components/Get-Involved/Volunteers";
import MakeADonation from "../Components/Get-Involved/MakeADonation";

const GetInvolved = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  // const toggleTab = (index) => {
  //   console.log(index);
  // };
  return (
    <div>
      <SectionHeader setActiveTab={setActiveTab} activeTab={activeTab} />
      {/* Tab Switching between Make a Donation and Become a Volunteer */}

      <div className="">
        {/* Make a donation components to be displayed */}

        {activeTab === "tab1" && (
          <div>
            <MakeADonation />
          </div>
        )}
        {/* Volunteer components to be displayed */}
        {activeTab === "tab2" && (
          <div>
            <Volunteers />
            <PictureCards />
            <Form />
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInvolved;
