import React from "react";
import Form from "../Components/Form";

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
    <div className="flex flex-col px-60 py-20">
      <div className="mb-12 w-2/3">
        <h3 className="text-primary-800 mb-15">Contact Us</h3>
        <br />
        <br />
        <p className="font-DM text-lg font-normal text-primary-800">
          You are important to us and we are continuously improving to serve you
          better.
        </p>
        <br />
        <p className="font-DM text-lg font-normal text-primary-800">
          We are here to help with any questions or concerns about our products
          and services. Please don't hesitate to reach out and let us know how
          we can make your experience even better.
        </p>
      </div>

      <div className="mb-12 w-fit">
        <p className="font-DM text-3xl font-medium text-primary-800">
          Head Office @ Whampoa Rehabilitation Centre
        </p>
        <img
          src="../src/Assets/shujun/contactus/map_Head Office.png"
          alt="Map of HWA Head Office in Whampoa"
          className="my-7"
        />
        <div>
          <span className="flex flex-row">
            <p className="font-DM text-lg font-bold">Address:&nbsp;</p>
            <p className="font-DM text-lg font-normal">
              16 Whampoa Drive, Singapore 327725
            </p>
          </span>
          <span className="flex flex-row">
            <p className="font-DM text-lg font-bold">Email:&nbsp;</p>
            <p className="font-DM text-lg font-normal">hwa@hwa.org.sg</p>
          </span>
          <span className="flex flex-row">
            <p className="font-DM text-lg font-bold">Phone:&nbsp;</p>
            <p className="font-DM text-lg font-normal">+65 6254 3006</p>
          </span>
        </div>
      </div>

      <div className="mb-24 w-fit">
        <p className="font-DM text-3xl font-medium text-primary-800">
          Jurong Point Rehabilitation Centre
        </p>
        <img
          src="../src/Assets/shujun/contactus/map_Jurong.png"
          alt="Map of HWA's Jurong Point Rehabilitation Centre"
          className="my-7"
        />
        <div>
          <span className="flex flex-row">
            <p className="font-DM text-lg font-bold">Address:&nbsp;</p>
            <p className="font-DM text-lg font-normal">
              1 Jurong West Central 2, #04-03, Jurong Point Shopping Centre,
            </p>
          </span>
          <p className="font-DM text-lg font-normal">Singapore 648886</p>
          <span className="flex flex-row">
            <p className="font-DM text-lg font-bold">Email:&nbsp;</p>
            <p className="font-DM text-lg font-normal">hwa@hwa.org.sg</p>
          </span>
          <span className="flex flex-row">
            <p className="font-DM text-lg font-bold">Phone:&nbsp;</p>
            <p className="font-DM text-lg font-normal">
              +65 6790 8636 / +65 6790 9029
            </p>
          </span>
        </div>
      </div>

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
