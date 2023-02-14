import React, { useState } from "react";
import PictureCards from "../PictureCards";
import Button from "../Button";

//DELTE THIS LATER
import dummyEvents from "../Current-Events/dummyEvents";

const Blog = () => {
  const [pictureInfo, setPictureInfo] = useState(dummyEvents);
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
