import React, { useState, useEffect, useRef } from "react";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsActive(false);
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <div className="flex flex-col ml-10">
      <div onClick={() => setIsActive(!isActive)} style={{ cursor: "pointer" }}>
        <div ref={ref} className="flex mt-8">
          <h3
            className={
              isActive
                ? "text-primary-800 border-l-4 pl-6 border-primary-800"
                : "text-secondary-600 border-l-4 pl-6 border-primary-200"
            }
          >
            {props.subheader1}
            <br />
            {props.subheader2}
          </h3>
        </div>
      </div>

      {isActive && (
        <div
          className={
            "ifont-DM text-lg text-primary-800 font-normal pt-8 pl-6 w-2/3 border-l-4 border-primary-800"
          }
        >
          {props.body}
        </div>
      )}
    </div>
  );
};

export default Accordion;
