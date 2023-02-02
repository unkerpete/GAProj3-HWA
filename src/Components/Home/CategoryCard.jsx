import React from "react";
import Button from "./Button";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <img src={props.img} alt={props.subheader} />
      <h2>{props.subheader}</h2>
      <p>{props.body}</p>
      <Button />
    </div>
  );
};

export default CategoryCard;
