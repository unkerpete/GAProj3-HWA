import React from "react";

const ButtonSubmit = (props) => {
  return (
    <button
      type="submit"
      className="font-DM text-lg font-normal bg-primary-600 hover:bg-primary-800 text-white py-3 px-6 rounded-full hover:scale-105 ease-in-out duration-300"
    >
      {props.text}
    </button>
  );
};
export default ButtonSubmit;
