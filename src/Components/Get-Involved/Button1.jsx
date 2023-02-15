import React from "react";

const Button1 = ({ text, handleSubmission }) => {
  // props require text and onClick Function
  return (
    <div>
      <button
        className="font-DM text-lg font-normal bg-primary-600 hover:bg-primary-800 text-white py-3 px-6 rounded-full hover:scale-105 ease-in-out duration-300"
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
