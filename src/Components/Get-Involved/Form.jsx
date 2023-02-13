import React, { useState } from "react";
import useAxios from "../../Hooks/useAxios";

// to change button into a separate component
const Form = () => {
  // temporarily keep the state here
  const [isSubmitted, setSubmitted] = useState(false);
  const [inputValues, setInputValues] = useState({});

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

        // fullName: "test",
        // email: "test@example.com",
        // contact: 1234,
        // company: "company",
        // message: "lol",
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
    makeRequest();
    console.log(response);
    console.log(error);
  };

  return (
    <div className="container mx-auto bg-primary-200 rounded-2xl shadow-md">
      <p className="text-center pt-10 mb-10">
        <h3>Corporate Volunteer Form</h3>
      </p>
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
    </div>
  );
};

export default Form;
