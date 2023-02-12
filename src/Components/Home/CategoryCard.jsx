import React from "react";
import Button from "../Button";

const CategoryCard = (props) => {
  return (
    <div className=" mx-5 grid justify-items-center content-between text-primary-800">
      <div>
        <img src={props.img} alt={props.subheader} className="object-contain" />
        <h3 className="text-center">{props.subheader}</h3>
        <p className="font-DM text-base text-center font-normal mt-6">
          {props.body}
        </p>
      </div>
      <div className="mt-5">
        <Button text={props.text} link={props.link} />
      </div>
    </div>
  );
};

export default CategoryCard;
