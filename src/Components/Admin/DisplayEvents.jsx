import React from "react";
import Card  from "react-bootstrap/Card";

const DisplayEvents = () => {
  const fetchEvents = async () => {};

  return (
    <>
      <button onClick={fetchEvents}>Fetch Events</button>
      <div>
        {events.map((event) => {
          return (
            <div className="each event">
              <p>title: {event.title}</p>
              <p>dateStart: {event.dateStart}</p>
              <p>dateEnd: {event.dateEnd}</p>
              <p>time: {event.time}</p>
              <p>description:{event.description}</p>
              <p>img:{event.img}</p>
              <p>action:{event.action}</p>
              <p>tag:{event.tag}</p>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default DisplayEvents;
