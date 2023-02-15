import React, { useState, useEffect } from "react";
import PictureCards from "../PictureCards";
import Button from "../Button";

//DELETE THIS LATER
import dummyEvents from "../Current-Events/dummyEvents";

const Blog = () => {
  const [pictureInfo, setPictureInfo] = useState([]);
  const url = "http://127.0.0.1:5001/events/currentevents";

  useEffect(() => {
    const getAllEvents = async () => {
      let data = {
        withinTheseDays: "3",
        tag: [
          "Fundraisers",
          "Talks",
          "Community Gathering",
          "Classes & Workshops",
        ],
      };
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const results = await response.json();
        setPictureInfo(results);
        console.log(results);
      } catch (error) {
        console.error(error);
      }
    };

    getAllEvents();
  }, []);

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
