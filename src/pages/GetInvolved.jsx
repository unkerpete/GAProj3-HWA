import React, { useState } from "react";
import SectionHeader from "../Components/Get-Involved/SectionHeader";
import Form from "../Components/Get-Involved/Form";
import PictureCards from "../Components/Get-Involved/PictureCards";
import Volunteers from "../Components/Get-Involved/Volunteers";
import MakeADonation from "../Components/Get-Involved/MakeADonation";

const GetInvolved = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    console.log(index);
  };
  return (
    <div>
      <SectionHeader toggleTab={toggleTab} />

      <MakeADonation />

      {/* <Volunteers />

      <PictureCards />
      <Form /> */}
    </div>
  );
};

export default GetInvolved;
