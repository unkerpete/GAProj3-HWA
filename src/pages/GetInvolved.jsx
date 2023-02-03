import React from "react";
import SectionHeader from "../Components/Get-Involved/SectionHeader";
import Form from "../Components/Get-Involved/Form";
import PictureCards from "../Components/Get-Involved/PictureCards";
import Volunteers from "../Components/Get-Involved/Volunteers";

const GetInvolved = () => {
  return (
    <div>
      <SectionHeader />

      <Volunteers />

      <PictureCards />
      <Form />
    </div>
  );
};

export default GetInvolved;
