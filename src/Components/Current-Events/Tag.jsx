import React from "react";
import { Link } from "react-router-dom";

const Tags = (props) => {
  return (
    <Link to={`${props.link}`}>
      <button
        type="button"
        className="font-DM text-lg font-normal border-2 border-secondary-600 text-secondary-600 hover:border-primary-800 hover:text-primary-800 active:text-primary-800 py-3 px-6 rounded-full"
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Tags;
