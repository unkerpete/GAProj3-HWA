import React, { useState } from "react";

const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="text-center my-8 border-b px-20">
      <div
        className="flex justify-between mb-2 font-DM text-xl font-normal"
        onClick={() => setIsActive(!isActive)}
      >
        {/* <div className="font-DM text-xl font-normal flex justify-between"> */}
          <div className="float-left">{title}</div>
          <div className="float-right">{isActive ? "-" : "+"}</div>
        {/* </div> */}
      </div>
      {isActive && (
        <div className="">
          {content}

          <img className=" object-center" src={image} />
          <br />
        </div>
      )}
    </div>
  );
};

export default Accordion;
