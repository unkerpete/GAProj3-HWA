import React, { useState } from "react";

const Accordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="justify-center text-center mb-2 border-b">
      <div className="accordion-title mb-2" onClick={() => setIsActive(!isActive)}>
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
