import React, { useState } from "react";

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    dateStart: "",
    dateEnd: "",
    time: "",
    description: "",
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

    // convert date string to date object
    const body = event;
    // 13/02/2023 -> date  object using date-fns
    // body.dateStart = new Date(body.dateStart);
    // body.dateEnd = new Date(body.dateEnd);

    // const url = "http://127.0.0.1:5001/users/createAppt";
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    // setNothing(data);
    console.log(data);
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
            type="file"
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

          {/* <button className="bg-gray-200 p-2 rounded">SUBMIT</button> */}
        </form>
      </div>
    </>
  );
};

export default CreateEvent;
