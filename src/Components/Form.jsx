import React, { Fragment, useState } from "react";
import { Listbox } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import Button from "../Components/Button";

const Form = (props) => {
  const [submittedInfo, setSubmittedInfo] = useState("");
  const [selectedOption, setSelectedOption] = useState(props.placeholder);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const relistOptions = () => {
    setSelectedOption(props.placeholder);
  };

  const handleListboxOptionClick = (e) => {
    setSelectedOption(e.target.innerText);
    console.log(e.target.innerText);
  };

  return (
    <div className={`w-full rounded-2xl shadow-md ${props.bgColour}`}>
      <h3 className="text-center text-primary-800 pt-10 mb-10">
        {props.header}
      </h3>
      <p className="text-center text-primary-800 font-DM text-lg font-normal">
        {props.message}
      </p>
      <p className="text-center text-primary-800 font-DM text-lg font-normal">
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

          <Listbox>
            <Listbox.Button className="col-start-4 col-end-9 rounded-2xl border bg-white text-start relative pointer-events-none">
              <div
                className="pl-7 py-2 pointer-events-auto"
                onClick={relistOptions}
              >
                {selectedOption === props.placeholder ? (
                  <span className=" text-secondary-600 ">
                    {props.placeholder}
                  </span>
                ) : (
                  <span className="text-black">{selectedOption}</span>
                )}
                <BsChevronExpand className="float-right mr-5 text-black" />
              </div>

              <Listbox.Options className="overflow-auto z-10 w-full pointer-events-auto absolute">
                {props.options.map((item, index) => (
                  <Listbox.Option
                    key={index}
                    value={selectedOption}
                    onClick={handleListboxOptionClick}
                  >
                    {({ active }) => (
                      <div
                        className={
                          active
                            ? "bg-secondary-600 text-black pl-7 py-2"
                            : "bg-white text-black pl-7 py-2"
                        }
                      >
                        {item}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox.Button>
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
