import React, { useState } from "react";

const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-justify my-6 px-80">
      <div
        className="flex justify-between py-2 font-DM text-xl font-normal border-b-2 "
        onClick={() => setIsActive(!isActive)}
      >
        <div className="float-left font-DM text-xl font-bold">{title}</div>
        <div className="float-right font-DM text-xl font-bold text-teal-400">
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && (
        <div className="accordion contents font-DM text-base font-normal object-fill">
          <br />
          {content}

          <img className=" mt-4 w-screen" src={image} />
          <br />
        </div>
      )}
    </div>
  );
};

export default Accordion;
