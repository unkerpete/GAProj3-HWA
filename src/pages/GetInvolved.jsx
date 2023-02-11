import React, { useState, useContext } from "react";
import SectionHeader from "../Components/Get-Involved/SectionHeader";
import Form from "../Components/Get-Involved/Form";
import PictureCards from "../Components/Get-Involved/PictureCards";
import Volunteers from "../Components/Get-Involved/Volunteers";
import MakeADonation from "../Components/Get-Involved/MakeADonation";
import getInvolvedContext from "../context/getInvolvedContext";

const GetInvolved = () => {
  // const [activeTab, setActiveTab] = useState("tab1"); RMV BY PETER
  const tabContext = useContext(getInvolvedContext); // ADDED BY PETER

  const toggleTab = (index) => {
    console.log(index);
  };
  return (
    <div>
      <SectionHeader />
      {/* Tab Switching */}
      <div className="">
        {tabContext.getInvolvedActiveTab === "tab1" && (
          <div>
            <MakeADonation />
          </div>
        )}
        {tabContext.getInvolvedActiveTab === "tab2" && (
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
