import { set } from "jjs";
import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import MessageModal from "../MessageModal";

// to change button into a separate component
const Form = () => {
  let [isOpen, setIsOpen] = useState(false);

  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    contact: "",
    company: "",
    message: "",
  });

  const { response, error, loading, makeRequest } = useAxios(
    {
      method: "PUT",
      url: "/volunteer/create",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        fullName: inputValues.fullName,
        email: inputValues.email,
        contact: inputValues.contact,
        company: inputValues.company,
        message: inputValues.message,
      },
    },
    false
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest(); // we call API here through makeRequest()
    console.log(response);
    // console.log(error);

    setInputValues({
      fullName: "",
      email: "",
      contact: "",
      company: "",
      message: "",
    });
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto bg-primary-200 rounded-2xl shadow-md">
      <span className="text-center pt-10 mb-10">
        <h3>Corporate Volunteer Form</h3>
      </span>
      <p className="text-center font-DM text-xl font-normal">
        Thank you for being interested in volunteering!
      </p>
      <p className="text-center font-DM text-xl font-normal">
        We will get back to you shortly!
      </p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-cols-8 gap-10 mb-6 p-16">
          <input
            className="col-start-1 col-end-6 border p-7 rounded-2xl"
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleInputChange}
            value={inputValues.fullName}
          />
          <input
            className="col-start-6 col-end-9 rounded-2xl border p-7"
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleInputChange}
            value={inputValues.email}
          />
          <input
            className="col-start-1 col-end-4 rounded-2xl border p-7"
            name="contact"
            type="text"
            placeholder="Contact Number"
            onChange={handleInputChange}
            value={inputValues.contact}
          />
          <input
            className="col-start-4 col-end-9 rounded-2xl border p-7"
            name="company"
            type="text"
            placeholder="Name of Company"
            onChange={handleInputChange}
            value={inputValues.company}
          />
          <input
            className="col-start-1 col-end-9 rounded-2xl border p-7 h-72"
            name="message"
            type="text"
            placeholder="Your message..."
            onChange={handleInputChange}
            value={inputValues.message}
          />
          <button
            className="col-start-4 rounded-full border bg-green-600 px-5 py-3"
            type="submit"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      {isOpen && response && (
        <MessageModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text="Form Sent Successfully"
        />
      )}
      {isOpen && !response && (
        <MessageModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text="Form Failed to Send"
        />
      )}
    </div>
  );
};

export default Form;
