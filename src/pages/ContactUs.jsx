import React from "react";
import Form from "../Components/Form";

const options = [
  { id: 1, type: "Social Service" },
  { id: 2, type: "Transport" },
  { id: 3, type: "Job Training/ Matching" },
  { id: 4, type: "Personal Care" },
  { id: 5, type: "Career" },
  { id: 6, type: "General Enquiry" },
  { id: 7, type: "Fund Raising" },
  { id: 8, type: "Rehabilitation Service" },
  { id: 9, type: "Media & Advertising" },
];

const ContactUs = () => {
  return (
    <div className="p-20 flex justify-center ">
      <Form
        bgColour="bg-secondary-400"
        header="Enquiry form"
        message="Should you require any information, feel free to send us a message."
        placeholder="Enquiry Type"
        options={options}
        btnLink=""
      />
    </div>
  );
};

export default ContactUs;
