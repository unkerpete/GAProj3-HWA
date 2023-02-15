import React, { useState, useEffect } from "react";
import PictureCards from "../PictureCards";
import Button from "../Button";

//DELTE THIS LATER
import dummyEvents from "../Current-Events/dummyEvents";

const Blog = () => {
  const [pictureInfo, setPictureInfo] = useState(dummyEvents);
  const [refresh, setRefresh] = useState(true);
  const url = "http://127.0.0.1:5001/events/showall";

  const getAllEvents = async () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((results) => {
        setPictureInfo(results);
      })
      .catch((error) => console.error(error));
    setRefresh(false);
  };

  useEffect(() => {
    if (refresh) {
      getAllEvents();
    }
  }, [refresh]);

  return (
    <div className="flex flex-col p-20 text-primary-800 h-5/6 content-between">
      <p className="font-DM text-3xl font-medium text-center mb-20">
        Events Happening Now
      </p>
      <PictureCards pictureInfo={pictureInfo} />
      <div className="flex justify-center mt-20">
        <Button text="See Full Calendar" link="/current-events" />
      </div>
    </div>
  );
};

export default Blog;
