import React, { useState } from "react";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="ml-10">
      <div
        className="flex justify-between py-5 w-1/2"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="">{isActive ? "-" : "+"}</div>
        <h3 className={isActive ? "text-primary-800" : "text-secondary-600"}>
          {props.subheader}
        </h3>
      </div>
      {isActive && (
        <div className="font-DM text-lg font-normal mt-5 w-2/3">
          <br />
          {props.body}
          <br />
        </div>
      )}
    </div>
  );
};

export default Accordion;
