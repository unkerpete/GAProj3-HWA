import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import Button from "../Button";
import ReactDOM from "react-dom";
import { ModalContext } from "../../pages/CurrentEvents";
import { Buffer } from "buffer";

const getBtnText = (tag) => {
  if (tag === "Fundraiser") {
    return "Giving.sg";
  } else if (
    tag === "Community Gatherings" ||
    tag === "Talks" ||
    tag === "Classes & Workshops"
  ) {
    return "Join Now";
  } else {
    return "Join Now";
  }
};

const EventsModal = () => {
  const modalCtx = useContext(ModalContext);
  const obj = modalCtx.modalEvent;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(obj.dateStart);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const dayOfWeek = weekday[date.getDay()];
  const formattedDate = `${day} ${month} ${year}, ${dayOfWeek}`;

  const handleModalClose = () => {
    modalCtx.changeModalStatus();
    modalCtx.enableScroll("root");
  };

  const base64string = Buffer.from(obj.img.data.data).toString("base64");

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="fixed top-0 right-0 w-screen h-screen z-40 bg-slate-800 opacity-50" />
          <div className=" z-50 absolute bg-white w-1/2 h-screen top-0 right-0 text-primary-800 p-8 overflow-y-auto">
            <div className="flex flex-row justify-between">
              <h3>{obj.title}</h3>
              <div onClick={handleModalClose} style={{ cursor: "pointer" }}>
                <RxCross1 className="text-3xl" />
              </div>
            </div>
            <p className="font-DM text-lg font-normal mt-3">
              {/* {obj.dateStart} {obj.dateEnd ? "-" : null} {obj.dateEnd}
              {obj.timeString ? ", " : null} */}
              {formattedDate}
              <br />
              {obj.timeString && obj.timeString}
            </p>
            <img
              className="rounded-2xl border object-cover w-full my-8"
              // src={obj.img}

              src={`data:image/jpg;base64,${base64string}`}
              width="431"
              height="287"
            />
            <div className="flex flex-row justify-between">
              <p className="font-DM text-base font-normal w-2/3">
                {obj.description}
              </p>
              <Button text={`${getBtnText(obj.tag)}`} link="/current-events/" />
            </div>
          </div>
        </>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default EventsModal;
