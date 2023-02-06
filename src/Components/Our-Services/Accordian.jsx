import React, { useState } from "react";

const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-center mb-2 border-b px-20">
      <div
        className="flex justify-center mb-2"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="font-DM text-xl font-normal">
          {title}
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && (
        <div className="">
          <br />
          {content}

          <img className=" object-center" src={image} />
          <br />
        </div>
      )}
    </div>
  );
};

export default Accordion;
