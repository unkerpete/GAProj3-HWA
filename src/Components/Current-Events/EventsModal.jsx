import React from "react";
import { RxCross1 } from "react-icons/rx";
import Button from "../Button";

const event = {
  title: "Seniors Go Digital",
  dateStart: "21 Jan 2023",
  dateEnd: "23 Jan 2023",
  time: "9 - 5:30 pm",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
  img: "src/Assets/shujun/homepage/blog/blog2.png",
  action: "/current-events",
  tag: "Classes & Workshops",
};

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
  return (
    <div className="z-50 bg-white w-1/2 min-h-full absolute top-0 right-0 text-primary-800 p-8">
      <div className="flex flex-row justify-between">
        <h3>{event.title}</h3>
        <div>
          <RxCross1 className="text-3xl" />
        </div>
      </div>
      <p className="font-DM text-lg font-normal mt-3">
        {event.dateStart} {event.dateEnd ? "-" : null} {event.dateEnd}
      </p>
      <img
        className="rounded-2xl border object-cover w-full h-full my-8"
        src={event.img}
        width="431"
        height="287"
      />
      <div className="flex flex-row justify-between">
        <p className="font-DM text-base font-normal w-3/5">
          {event.description}
        </p>
        <Button text={`${getBtnText(event.tag)}`} />
      </div>
    </div>
  );
};

export default EventsModal;
