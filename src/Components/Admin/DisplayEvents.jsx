import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import Update from "./Update";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import { Buffer } from "buffer";
import spinner from "../../Components/Get-Involved/loadingspinner.svg";

const DisplayEvents = () => {
  const [events, setEvents] = useState([]); // To store the array of events
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchEvents = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:5001/events/showall");
      setEvents(res.data.events);
      console.log("events: ", events);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="my-6 ml-44 inline-block px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleFetchEvents}
      >
        Fetch Events
      </button>
      {/* Display spinner if still loading */}
      {isLoading && (
        <div className="ml-40">
          <img src={spinner} width="200" />
        </div>
      )}

      {/* Updated mapping */}
      {events.map((event) => {
        const base64string = Buffer.from(event.img.data.data).toString(
          "base64"
        );

        return (
          <div className="m-2 flex flex-col font-DM text-base font-normal block p-8 rounded-lg shadow-lg bg-primary-200 max-w-lg">
            <img src={`data:image/jpg;base64,${base64string}`} />
            <span className="text-gray-700 mb-4">
              <p>
                <span className="font-bold">
                  Title :&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </span>
                {event.title}
              </p>
              <p>
                <span className="font-bold">Start Date: &nbsp;&nbsp;</span>{" "}
                {event.dateStart.split("T")[0]}
              </p>
              <p>
                <span className="font-bold">
                  End Date: &nbsp;&nbsp;&nbsp; &nbsp;
                </span>
                {event.dateEnd.split("T")[0]}
              </p>
              <p>
                <span className="font-bold">
                  Time: &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </span>
                {event.timeString}
              </p>
              <p>
                <span className="font-bold">Description: </span>
                {event.description}
              </p>
              <p>
                <span className="font-bold">
                  Action :&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                </span>{" "}
                {event.action}
              </p>
              <p>
                <span className="font-bold">
                  Tags : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </span>
                {event.tag}
              </p>
              <div className="flex justify-center ml-3">
                <Delete eventId={event._id} />
              </div>

              <div className="flex justify-center ">
                <Update
                  title={event.title}
                  description={event.description}
                  img={event.img}
                  action={event.action}
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
