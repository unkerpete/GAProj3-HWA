import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import Update from "./Update";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import { Buffer } from "buffer";

const DisplayEvents = () => {
  const [events, setEvents] = useState([]); // To store the array of events
  const handleFetchEvents = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5001/events/showall");
      setEvents(res.data.events);
      console.log("events: ", events);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        className="my-5 ml-40 inline-block px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleFetchEvents}
      >
        Fetch Events
      </button>

      {/* Updated mapping */}
      {events.map((event) => {
        const base64string = Buffer.from(event.img.data.data).toString(
          "base64"
        );

        return (
          <div className="flex flex-col font-DM text-base font-normal block p-8 rounded-lg shadow-lg bg-primary-200 max-w-lg">
            <img src={`data:image/jpg;base64,${base64string}`} />
            <span className="text-gray-700 mb-4">
              <p>
                Title :&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                {event.title}
              </p>
              <p>Start Date: &nbsp;&nbsp; {event.dateStart.split("T")[0]}</p>
              <p>
                End Date: &nbsp;&nbsp;&nbsp; &nbsp;{event.dateEnd.split("T")[0]}
              </p>
              <p>
                Time: &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{" "}
                {event.timeString}
              </p>
              <p>Description: {event.description}</p>
              <p>Action :&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {event.action}</p>
              <p>Tags : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; {event.tag}</p>
              <div className="flex justify-center">
                <Delete eventId={event._id} />
              </div>
              <div className="flex justify-center">
                <Update
                  title={event.title}
                  description={event.description}
                  img={event.img}
                  action={event.img}
                  tag={event.tag}
                  id={event._id}
                />
              </div>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default DisplayEvents;
