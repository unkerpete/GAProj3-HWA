import React, { useState } from "react";

// to change button into a separate component
const Form = () => {
  // temporarily keep the state here
  const [submittedInfo, setSubmittedInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div class="container mx-auto bg-green-50 rounded-2xl shadow-md">
      <p className="text-4xl text-center pt-10 mb-10">
        Corporate Volunteer Form
      </p>
      <p className="text-center text-2xl">
        Thank you for being interested in volunteering!
      </p>
      <p className="text-center text-2xl">We will get back to you shortly!</p>

      <form>
        <div className="grid grid-cols-8 gap-10 mb-6 p-16">
          <input
            className="col-start-1 col-end-6 border p-7 rounded-2xl"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="col-start-6 col-end-9 rounded-2xl border p-7"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="col-start-1 col-end-4 rounded-2xl border p-7"
            type="text"
            placeholder="Contact Number"
          />
          <input
            className="col-start-4 col-end-9 rounded-2xl border p-7"
            type="text"
            placeholder="Name of Company"
          />
          <input
            className="col-start-1 col-end-9 rounded-2xl border p-7 h-72"
            type="text"
            placeholder="Your message..."
          />
          <button
            className="col-start-4 rounded-full border bg-green-600 px-5 py-3"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
