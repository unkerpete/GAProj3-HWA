import React from "react";

const Button1 = ({ text, handleSubmission }) => {
  // props require text and onClick Function
  return (
    <div>
      <button
        className="bg-primary-600 text-white rounded-2xl px-4 py-1 mb-24 font-DM text-lg font-normal "
        type="submit"
        onClick={(e) => {
          handleSubmission(e);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button1;
