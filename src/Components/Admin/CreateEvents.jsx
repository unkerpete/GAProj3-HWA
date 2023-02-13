import React, { useState } from "react";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    dateStart: "",
    dateEnd: "",
    time: "",
    descriptin: "",
    img: "",
    action: "",
    tag: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const createEvent = async () => {
    e.preventDefault();

    // const url = "http://127.0.0.1:5001/users/createAppt";
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    const data = await res.json();
    // setNothing(data);
    console.log(data);
  };

  return (
    <>
      <div className="w-1/2">
        <h2>Create event</h2>
        <form onSubmit={(e) => createEvent(e)}>
          <input
            placeholder="title"
            name="title"
            value={event.title}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <input
            placeholder="dateStart"
            name="dateStart"
            value={event.dateStart}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <input
            placeholder="dateEnd"
            name="dateEnd"
            value={event.dateEnd}
            onChange={(e) => handleChange(e.target.value)}
          />
          <input
            placeholder="time"
            name="time"
            value={event.time}
            onChange={(e) => handleChange(e.target.value)}
          />
          <input
            placeholder="description"
            name="description"
            value={event.description}
            onChange={(e) => handleChange(e.target.value)}
          />
          <input
            placeholder="img"
            name="img"
            value={event.img}
            onChange={(e) => handleChange(e.target.value)}
          />
          <input
            placeholder="action"
            name="action"
            value={event.action}
            onChange={(e) => handleChange(e.target.value)}
          />
          <input
            placeholder="tag"
            name="tag"
            value={event.tag}
            onChange={(e) => handleChange(e.target.value)}
          />

          <button className="bg-gray-200 p-2 rounded">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
