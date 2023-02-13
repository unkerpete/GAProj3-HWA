import React, { useState } from "react";
import parse from "date-fns/parse";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "abc",
    dateStart: "2023-02-14",
    dateEnd: "2023-02-14",
    time: "0900",
    description: "abc",
    img: "abc",
    action: "abc",
    tag: "abc",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const createEvent = (e) => {
    e.preventDefault();

    // convert date string to date object
    const body = event;
    console.log(body);
    // 13/02/2023 -> date  object using date-fns
    // date is formatted as "2023-02-14" when clicked on calendar
    body.dateStart = parse(body.dateStart, "yyyy-MM-dd", new Date());
    body.dateEnd = parse(body.dateEnd, "yyyy-MM-dd", new Date());
    console.log(body.dateStart)
    
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((response) => response.json())
    //   .then((results) => {
    //     console.log(results);
    //   })
    //   .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="w-1/2">
        {/* <h2>Create event</h2> */}
        <form onSubmit={(e) => createEvent(e)}>
          <input
            placeholder="title"
            name="title"
            type="text"
            value={event.title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            placeholder="dateStart"
            name="dateStart"
            type="date"
            value={event.dateStart}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            placeholder="dateEnd"
            name="dateEnd"
            type="date"
            value={event.dateEnd}
            onChange={(e) => handleChange(e)}
          />
          <input
            placeholder="time"
            name="time"
            type="text"
            value={event.time}
            onChange={(e) => handleChange(e)}
          />
          <input
            placeholder="description"
            name="description"
            type="text"
            value={event.description}
            onChange={(e) => handleChange(e)}
          />
          <input
            placeholder="img"
            name="img"
            type="text"
            value={event.img}
            onChange={(e) => handleChange(e)}
          />
          <input
            placeholder="action"
            name="action"
            type="text"
            value={event.action}
            onChange={(e) => handleChange(e)}
          />
          <input
            placeholder="tag"
            name="tag"
            type="text"
            value={event.tag}
            onChange={(e) => handleChange(e)}
          />

          <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
