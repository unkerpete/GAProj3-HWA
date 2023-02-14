import React from "react";
import PictureCards from "../Components/PictureCards";
import TagsDisplay from "../Components/Current-Events/TagsDisplay";
import EventsSectionHeader from "../Components/Current-Events/EventsSectionHeader";
import EventsModal from "../Components/Current-Events/EventsModal";

const pictureInfo = [
  {
    title: "Medical Talk - Essential Caregiving Skills",
    dateStart: "21 Jan 2023",
    dateEnd: "",
    time: "9:00 am",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    img: "src/Assets/shujun/homepage/blog/blog1.png",
    action: "/current-events",
    tag: "Talks",
  },
  {
    title: "Seniors Go Digital",
    dateStart: "21 Jan 2023",
    dateEnd: "23 Jan 2023",
    time: "9 - 5:30 pm",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    img: "src/Assets/shujun/homepage/blog/blog2.png",
    action: "/current-events",
    tag: "Classes & Workshops",
  },
  {
    title: "37th Annual Wheel, Walk or Jog 2021",
    dateStart: "5 Feb 2023",
    dateEnd: "28 Feb 2023",
    time: "",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
    img: "src/Assets/shujun/homepage/blog/blog3.png",
    action: "/current-events",
    tag: "Fundraiser",
  },
];

const CurrentEvents = () => {
  // date-based API endpoints to filter to current, upcoming, past
  // Custom API call to filter through dates
  // Further API endpoints to sort based on categories
  // API endpoints return with
  // Date, image, category, title, time link -> all to be stored inside a state that will be mapped

  return (
    <div>
      {/* section header inclusive of filters */}
      <EventsSectionHeader />

      {/* categorical filters */}
      <TagsDisplay />

      {/* mapped out event cards  */}
      <PictureCards pictureInfo={pictureInfo} vertical />
      {/* right side modal when button on card is clicked */}
      <EventsModal />
    </div>
  );
};

export default CurrentEvents;
