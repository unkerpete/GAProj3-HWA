import React, { useState } from "react";
import Delete from "./Delete";
import Update from "./Update";

const DisplayEvents = () => {
  const [toggleShowEvents, setToggleShowEvents] = useState(false);

  const [events, setEvents] = useState([
    // {
    //   title: "Garden of Hope - Flower planting",
    //   date: "19 Feb 2023",
    //   start: "9:00 am",
    //   end: "11:00 am",
    //   description: "Lorem ipsum dolor sit amet",
    //   img: "Lorem ipsum dolor sit",
    //   action: "Lorem Link",
    //   tag: "Community Gathering",
    // },
    // {
    //   title: "Medical Talk - Essential Caregiving Skills",
    //   date: "21 Feb 2023",
    //   start: "9:00 am",
    //   end: "11:00 am",
    //   description: "Lorem ipsum dolor sit amet",
    //   img: "Lorem ipsum dolor sit",
    //   action: "Lorem Link",
    //   tag: "Talks",
    // },
    // {
    //   title: "Seniors Go Digital",
    //   date: "21 Feb 2023",
    //   dateEnd: "23 Feb 2023",
    //   start: "9:00 am",
    //   end: "5:30 pm",
    //   description: "Lorem ipsum dolor sit amet",
    //   img: "Lorem ipsum dolor sit",
    //   action: "Lorem Link",
    //   tag: "Classes & Workshops",
    // },
  ]);

  const fetchEvents = async () => {
    const url = "http://127.0.0.1:5001/events/showall";
    const res = await fetch(url);
    const data = await res.json();
    setEvents(data);
    console.log(data);
  };

  const handleToggle = () => {
    fetchEvents();
    setToggleShowEvents(!toggleShowEvents);
  };

  return (
    <>
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={fetchEvents}
      >
        Fetch Events
      </button>
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleToggle}
      >
        Show/Hide Events
      </button>

      {/* MAPPING OF EVENTS */}
      {events.events && toggleShowEvents && (
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
      )}
    </>
  );
};

export default DisplayEvents;
