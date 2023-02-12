import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { BsChevronExpand } from "react-icons/bs";
import ButtonSubmit from "../Components/ButtonSubmit";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState(props.placeholder);

  //CHANGE THIS TO POST TO BACKEND
  const postData = () => {
    console.log(
      `Post data to backend:${name},${email},${tel},${selectedOption},${message}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  const handleChange = (e) => {
    const inputId = e.target.id;
    const inputVal = e.target.value;
    if (inputId === "name") {
      setName(inputVal);
    } else if (inputId === "email") {
      setEmail(inputVal);
    } else if (inputId === "tel") {
      setTel(inputVal);
    } else if (inputId === "message") {
      setMessage(inputVal);
    }
  };

  const handleListboxOptionClick = (e) => {
    setSelectedOption(e.target.innerText);
  };

  const relistListboxOptions = () => {
    setSelectedOption(props.placeholder);
  };

  return (
    <div
      className={`w-full rounded-2xl shadow-md text-center text-primary-800 ${props.bgColour}`}
    >
      <h3 className=" pt-10 mb-10">{props.header}</h3>
      <p className="font-DM text-lg font-normal">{props.message}</p>
      <p className="font-DM text-lg font-normal">
        We will get back to you shortly!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-8 gap-10 mb-6 p-16">
          <input
            className="col-start-1 col-end-6 border p-7 rounded-2xl"
            type="text"
            placeholder="Full Name"
            id="name"
            value={name}
            onChange={handleChange}
            required
            pattern="^[a-zA-Z ]{2,30}$"
            title="Name must be 2 to 30 letters only"
          />
          <input
            className="col-start-6 col-end-9 rounded-2xl border p-7"
            type="email"
            placeholder="Email Address"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            className="col-start-1 col-end-4 rounded-2xl border p-7"
            type="tel"
            placeholder="Contact Number"
            id="tel"
            value={tel}
            onChange={handleChange}
            required
            pattern="^\d{8}$"
            title="Contact Number must be 8 digits"
          />

          <Listbox id="selectedOption" value={selectedOption}>
            <Listbox.Button className="col-start-4 col-end-9 rounded-2xl border bg-white text-start relative pointer-events-none">
              <div
                className="pl-7 py-2 pointer-events-auto"
                onClick={relistListboxOptions}
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
            id="message"
            value={message}
            onChange={handleChange}
            required
          />

          <div className="col-start-1 col-end-9 flex justify-center">
            <ButtonSubmit text="Submit" className="justify-center" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
