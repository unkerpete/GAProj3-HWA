import React from "react";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const CategoryCard = (props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.tabFunction();
  };

  return (
    <div className=" mx-5 grid justify-items-center content-between text-primary-800 ">
      <div className="relative">
        <NavLink to={props.link} onClick={handleClick}>
          <img
            className="absolute top-0 right-0 opacity-0 hover:opacity-100"
            src={props.bg_img}
            alt={props.subheader}
          />
        </NavLink>
        <img src={props.img} alt={props.subheader} className="object-contain" />

        <h3 className="text-center">{props.subheader}</h3>
        <p className="font-DM text-base text-center font-normal mt-6">
          {props.body}
        </p>
      </div>
      <div className="mt-5">
        <Button text={props.text} link={props.link} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default CategoryCard;
