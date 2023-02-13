import React from "react";

const Tags = (props) => {
  return (
    <button
      type="button"
      className="font-DM text-lg font-normal border-2 border-secondary-600 text-secondary-600 focus:border-primary-800 focus:text-primary-800 focus:font-bold py-3 px-6 rounded-full"
    >
      {props.text}
    </button>
  );
};

export default Tags;
