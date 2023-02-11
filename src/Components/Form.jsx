import React, { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import Button from "../Components/Button";

const Form = (props) => {
  const [submittedInfo, setSubmittedInfo] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className={`rounded-2xl shadow-md w-2/3 ${props.bgColour}`}>
      <h3 className="text-center text-primary-800 pt-10 mb-10">
        {props.header}
      </h3>
      <p className="text-center text-primary-800 font-DM text-xl font-normal">
        {props.message}
      </p>
      <p className="text-center text-primary-800 font-DM text-xl font-normal">
        We will get back to you shortly!
      </p>

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

          <Listbox value={selectedOption} onChange={setSelectedOption}>
            <Listbox.Button className="text-secondary-600 col-start-4 col-end-9 rounded-2xl border p-7 bg-white text-start">
              {props.placeholder}
            </Listbox.Button>
            <Listbox.Options className="col-start-4 col-end-9  bg-white overflow-auto mt-1 z-10 relative">
              {props.options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  value={option.type}
                  as={Fragment}
                >
                  {({ active, selected }) => (
                    <div
                      className={
                        active ? "bg-secondary-600 pl-7 " : "bg-white pl-7 "
                      }
                    >
                      {option.type}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>

          <textarea
            className="col-start-1 col-end-9 rounded-2xl border p-7 h-72 align-baseline"
            type="text"
            placeholder="Your message..."
          />

          <div className="col-start-1 col-end-9 flex justify-center">
            <Button
              text="Submit"
              onClick={handleSubmit}
              className="justify-center"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
