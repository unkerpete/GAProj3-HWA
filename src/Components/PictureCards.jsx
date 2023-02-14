import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ButtonOther from "./ButtonOther";
import { ModalContext } from "../pages/CurrentEvents";

const PictureCards = (props) => {
  const modalCtx = useContext(ModalContext);

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

  const handleClick = (obj) => {
    modalCtx.changeModalStatus();
    modalCtx.disableScroll("root");
    modalCtx.setModalEvent(obj);
  };

  return (
    <div
      className={`${
        props.vertical
          ? "grid grid-rows-3 py-20 pl-20 pr-60"
          : "flex flex-row gap-8 overflow-x-auto flex-nowrap"
      }`}
    >
      {props.pictureInfo.map((obj, index) => {
        return (
          <div
            className={
              props.vertical ? "grid grid-cols-3 my-8" : "flex flex-col"
            }
            key={index}
          >
            {props.vertical ? (
              <p className="font-DM text-3xl font-medium text-primary-800 mr-40 ">
                {obj.dateStart}
              </p>
            ) : null}
            <div className={props.vertical ? "mr-8" : "mb-3 w-96"}>
              <img
                className="rounded-2xl border"
                src={obj.img}
                width="431"
                height="287"
              />
            </div>

            <div className="grid content-between ">
              <div>
                <p className={"font-DM text-base font-normal"}>
                  {obj.tag ? (
                    <span className={`${getTagClass(obj.tag)} `}>
                      {obj.tag}
                    </span>
                  ) : (
                    <span className="text-white">no tag</span>
                  )}
                </p>
                <Link to={obj.action}>
                  <h3 className="py-3 w-3/4">{obj.title}</h3>
                </Link>
                <p className="font-DM text-lg font-normal">
                  {obj.dateStart} {obj.dateEnd ? "-" : null} {obj.dateEnd}
                  {obj.timeString ? ", " : null}
                  {obj.timeString}
                </p>
              </div>
              {props.vertical ? (
                <ButtonOther
                  text="Learn More"
                  type="button"
                  onClick={() => handleClick(obj)}
                />
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PictureCards;
