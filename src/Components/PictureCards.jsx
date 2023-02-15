import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ButtonOther from "./ButtonOther";
import { ModalContext } from "../pages/CurrentEvents";

const PictureCards = (props) => {
  const modalCtx = useContext(ModalContext);

  const getTagClass = (tag) => {
    let colour;
    switch (tag) {
      case "Talks":
        colour = "bg-peach";
        break;
      case "Classes & Workshops":
        colour = "bg-secondary-400";
        break;
      case "Fundraiser":
        colour = "bg-primary-400";
        break;
      case "Community Gatherings":
        colour = "bg-secondary-400";
        break;
      default:
        colour = "bg-white";
    }
    return colour;
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
          : "grid grid-cols-3 gap-8 h-[459px] overflow-y-clip"
      }`}
    >
      {props.pictureInfo.events &&
        props.pictureInfo.events.map((obj, index) => {
          const date = new Date(obj.dateStart);
          const day = date.getDate();
          const month = date.toLocaleString("default", { month: "short" });
          const year = date.getFullYear();
          const formattedDate = `${day} ${month} ${year}`;
          return (
            <div
              className={
                props.vertical
                  ? "grid grid-cols-3 my-8"
                  : "col h-[459px] content-center"
              }
              key={index}
            >
              {props.vertical ? (
                <p className="font-DM text-3xl font-medium text-primary-800 mr-40 ">
                  {obj.dateStart}
                </p>
              ) : null}

              <div className={props.vertical ? "mr-8" : "mb-3"}>
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
                    {/* {obj.dateStart} {obj.dateEnd ? "-" : null} {obj.dateEnd} */}
                    {formattedDate}
                    <br />
                    {obj.timeString && obj.timeString}
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
