import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
const Button = (props) => {
  return (
    <Link to="/Home">
      <button
        type="button"
        className="font-DM text-lg font-normal bg-primary-600 hover:bg-primary-800 text-white py-3 px-6 rounded-full hover:scale-105 ease-in-out duration-300"
      >
        {props.text}
      </button>
    </Link>
  );
};
export default Button;
//Return Data Value Prop down
// import { Link } from "react-router-dom";
// <Link to="/Home">
// <Button text={"Click-Me"}>
//   <p>Click Me!</p>
// </Button>
// </Link>
