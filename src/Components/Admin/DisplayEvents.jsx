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
        className="inline-block ml-2 my-6 px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleToggle}
      >
        Show/Hide Events
      </button>

      {/* MAPPING OF EVENTS */}
      {events.events && toggleShowEvents && (
        <div>
          {events.map((event) => {
            return (
              <div className="block p-6 rounded-lg shadow-lg bg-primary-200 m-2 max-w-sm">
                <span className="text-gray-700 mb-4">
                  <div className="each event">
                    <p>
                      Title :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                      {event.title}
                    </p>
                    <p>Start Date :&nbsp; {event.dateStart.split("T")[0]}</p>
                    <p>End Date: &nbsp; &nbsp; {event.dateEnd.split("T")[0]}</p>
                    <p>
                      Time: &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                      {event.timeString}
                    </p>
                    <p>Description: &nbsp; {event.description}</p>
                    <p>Image :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {event.img}</p>
                    <p>
                      Action :&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {event.action}
                    </p>
                    <p>Tags : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {event.tag}</p>
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
      )}

      {/* Updated mapping */}
      {events.map((event) => {
        const base64string = Buffer.from(event.img.data.data).toString(
          "base64"
        );

        return (
          <div className="block p-6 rounded-lg shadow-lg bg-primary-200 m-2 max-w-sm">
            <img src={`data:image/jpg;base64,${base64string}`} />
            <span className="text-gray-700 mb-4">
              <p>
                Title :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {event.title}
              </p>

              <p>
                Time: &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                {event.timeString}
              </p>
              <p>Description: &nbsp; {event.description}</p>
              <p>Action :&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; {event.action}</p>
              <p>Tags : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {event.tag}</p>
              <Delete eventId={event._id} />
              <Update
                title={event.title}
                description={event.description}
                img={event.img}
                action={event.img}
                tag={event.tag}
                id={event._id}
              />
            </span>
          </div>
        );
      })}

      {/* {mapped ? mapped : ""} */}
    </>
  );
};

export default DisplayEvents;
