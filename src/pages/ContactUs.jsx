import React from "react";
import Form from "../Components/Form";

// const options = [
//   { type: "Enquiry Type" },
//   { type: "Social Service" },
//   { type: "Transport" },
//   { type: "Job Training/ Matching" },
//   { type: "Personal Care" },
//   { type: "Career" },
//   { type: "General Enquiry" },
//   { type: "Fund Raising" },
//   { type: "Rehabilitation Service" },
//   { type: "Media & Advertising" },
// ];

const options = [
  "Social Service",
  "Transport",
  "Job Training/ Matching",
  "Personal Care",
  "Career",
  "General Enquiry",
  "Fund Raising",
  "Rehabilitation Service",
  "Media & Advertising",
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
      />
    </div>
  );
};

export default ContactUs;
