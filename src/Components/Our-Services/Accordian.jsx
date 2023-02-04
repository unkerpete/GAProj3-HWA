import React, { useState } from "react";

const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="justify-center border-b">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {title}
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && (
        <div className="">
          <br />
          {content}

          <img className="w-96 object-center" src={image} />
          <br />
        </div>
      )}
    </div>
  );
};

export default Accordion;
