import React from "react";
import PictureCards from "../PictureCards";
import Button from "../Button";

const pictureInfo = [
  {
    title: "Medical Talk - Essential Caregiving Skills",
    date: "21 Jan, 9:00 am",
    tag: "Talks",
    url: "src/Assets/shujun/homepage/blog/blog1.png",
    alt: "Three elderly women",
    link: "/current-events",
  },
  {
    title: "Garden of Hope - Flower Planting",
    date: "21 - 23 Jan, 9 - 5:30 pm",
    tag: "Classes & Workshops",
    url: "src/Assets/shujun/homepage/blog/blog2.png",
    alt: "Grandmother and grandson",
    link: "/current-events",
  },
  {
    title: "37th Annual Wheel, Walk or Jog 2021",
    date: "5 - 28 Feb, 2023",
    tag: "Fundraiser",
    url: "src/Assets/shujun/homepage/blog/blog3.png",
    alt: "Man holding a basketball",
    link: "/current-events",
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
