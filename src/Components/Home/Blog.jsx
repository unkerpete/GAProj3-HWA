import React from "react";
import PictureCards from "../PictureCards";
import Button from "../Button";

const pictureInfo = [
  {
    title: "Medical Talk - Essential Caregiving Skills",
    dateStart: "21 Jan 2023",
    dateEnd: "",
    time: "9:00 am",
    description: "",
    img: "src/Assets/shujun/homepage/blog/blog1.png",
    action: "/current-events",
    tag: "Talks",
  },
  {
    title: "Seniors Go Digital",
    dateStart: "21 Jan 2023",
    dateEnd: "23 Jan 2023",
    time: "9 - 5:30 pm",
    description: "",
    img: "src/Assets/shujun/homepage/blog/blog2.png",
    action: "/current-events",
    tag: "Classes & Workshops",
  },
  {
    title: "37th Annual Wheel, Walk or Jog 2021",
    dateStart: "5 Feb 2023",
    dateEnd: "28 Feb 2023",
    time: "",
    description: "",
    img: "src/Assets/shujun/homepage/blog/blog3.png",
    action: "/current-events",
    tag: "Fundraiser",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col p-20 text-primary-800 h-screen content-between">
      <p className="font-DM text-3xl font-medium text-center mb-20">
        Events Happening Now
      </p>
      <PictureCards pictureInfo={pictureInfo} />
      <div className="flex justify-center mt-auto">
        <Button text="See Full Calendar" link="/current-events" />
      </div>
    </div>
  );
};

export default Blog;
