import React from "react";
import Button from "../Button";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <img src={props.img} alt={props.subheader} />
      <h1>{props.subheader}</h1>
      <p>{props.body}</p>
      <Button text={props.text} link={props.link} />
    </div>
  );
};

export default CategoryCard;
