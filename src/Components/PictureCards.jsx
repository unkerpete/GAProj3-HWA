import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const PictureCards = (props) => {
  const getTagClass = (tag) => {
    switch (tag) {
      case "Talks":
        return "bg-peach";
      case "Classes & Workshops":
        return "bg-secondary-400";
      case "Fundraiser":
        return "bg-primary-400";
      case "Community Gatherings":
        return "bg-secondary-400";
      default:
        return "bg-white";
    }
  };

  const getTagLink = (tag) => {
    switch (tag) {
      case "Talks":
        return "/current-events";
      case "Classes & Workshops":
        return "/current-events";
      case "Fundraiser":
        return "/current-events";
      case "Community Gatherings":
        return "/current-events";
      default:
        return "current-events";
    }
  };

  return (
    <div
      className={`${
        props.vertical ? "grid grid-rows-3" : "grid grid-cols-3 gap-8"
      }`}
    >
      {props.pictureInfo.map((obj, index) => {
        return (
          <div
            className={
              props.vertical
                ? "flex flex-row my-8"
                : "col h-[459px] content-center"
            }
            key={index}
          >
            {props.vertical ? (
              <p className="font-DM text-3xl font-medium text-primary-800 mr-40">
                {obj.dateStart}
              </p>
            ) : null}
            <div>
              <img
                className={`${
                  props.vertical ? "mr-7" : "mb-3"
                } rounded-2xl border `}
                src={obj.img}
                width="431"
                height="287"
              />
            </div>

            <div>
              <p className={"font-DM text-base font-normal"}>
                {obj.tag ? (
                  <Link to={`${getTagLink(obj.tag)}`}>
                    <span className={`${getTagClass(obj.tag)} `}>
                      {obj.tag}
                    </span>
                  </Link>
                ) : (
                  <span className="text-white">no tag</span>
                )}
              </p>
              <Link to={obj.action}>
                <h3 className="py-3 w-3/4">{obj.title}</h3>
              </Link>
              <p className="font-DM text-xl font-normal">
                {obj.dateStart} {obj.dateEnd ? "-" : null} {obj.dateEnd},
                {obj.time}
              </p>
              {props.vertical ? (
                <div className="flex align-bottom">
                  <Button text="Learn More" link="" />
                </div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PictureCards;
