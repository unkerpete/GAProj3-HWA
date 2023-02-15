import React, { useState, useEffect } from "react";
import Delete from "./Delete";
import Update from "./Update";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import { Buffer } from "buffer";

const DisplayEvents = () => {
  const [toggleShowEvents, setToggleShowEvents] = useState(false);

  const [events, setEvents] = useState([]); // To store the array of events

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5001/events/showall");
      setEvents(res.data);
      // mapped();
      // console.log("events.data.events: ", events.data.events);
      console.log("events ", events);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFetchEvents = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5001/events/showall");
      setEvents(res.data.events);
      console.log("events: ", events);
    } catch (err) {
      console.log(err);
    }
  };

  const handleToggle = () => {
    setToggleShowEvents(!toggleShowEvents);
  };

  // const mapped = () => {
  //   events.map((ele, index) => {
  //     return <div>{ele.title}</div>;
  //   });
  // };

  // useEffect(() => {
  //   mapped();
  // }, [events]);

  return (
    <>
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleFetchEvents}
      >
        Fetch Events
      </button>

      <button
        className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleToggle}
      >
        Show/Hide Events
      </button>

      {/* MAPPING OF EVENTS */}
      {/* {events.events && toggleShowEvents && (
        <div>
          {events.events.map((event) => {
            return (
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <span className="text-gray-700 text-base mb-4">
                  <div className="each event">
                    <p>title: {event.title}</p>
                    <p>dateStart: {event.dateStart}</p>
                    <p>dateEnd: {event.dateEnd}</p>
                    <p>time: {event.time}</p>
                    <p>description:{event.description}</p>
                    <p>img:{event.img}</p>
                    <p>action:{event.action}</p>
                    <p>tag:{event.tag}</p>
                    <Delete eventId={event._id} />
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
        </div>
      )} */}

      {/* Updated mapping */}
      <div className="">
        {events.map((event) => {
          const base64string = Buffer.from(event.img.data.data).toString(
            "base64"
          );
          return <img src={`data:image/jpg;base64,${base64string}`} />;
        })}
      </div>

      {/* {mapped ? mapped : ""} */}
    </>
  );
};

export default DisplayEvents;
