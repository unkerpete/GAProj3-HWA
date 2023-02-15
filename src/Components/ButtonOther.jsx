import React from "react";

const ButtonOther = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="w-fit font-DM text-lg font-normal bg-primary-600 hover:bg-primary-800 text-white py-3 px-6 rounded-full hover:scale-105 ease-in-out duration-300"
    >
      {props.text}
    </button>
  );
};
export default ButtonOther;
