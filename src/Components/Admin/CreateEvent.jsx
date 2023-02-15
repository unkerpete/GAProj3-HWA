import React, { useState } from "react";
import parse from "date-fns/parse";

const CreateEvent = () => {
  const [toggleCreate, setToggleCreate] = useState(false);

  const [event, setEvent] = useState({
    title: "",
    dateStart: "",
    dateEnd: "",
    timeString: "",
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

  const createEvent = (e) => {
    e.preventDefault();

    // convert date string to date object
    const body = event;
    console.log(body);
    // 13/02/2023 -> date  object using date-fns
    // date is formatted as "2023-02-14" when clicked on calendar
    body.dateStart = parse(body.dateStart, "yyyy-MM-dd", new Date());
    body.dateEnd = parse(body.dateEnd, "yyyy-MM-dd", new Date());
    console.log(body.dateStart);

    fetch("http://127.0.0.1:5001/events/create", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
      })
      .catch((error) => console.error(error));

    setEvent({
      title: "",
      dateStart: "",
      dateEnd: "",
      timeString: "",
      description: "",
      img: "",
      action: "",
      tag: "",
    });
  };

  const handleToggle = () => {
    setToggleCreate(!toggleCreate);
  };

  return (
    <>
      <button
        className="inline-block my-6 px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleToggle}
      >
        Create Event
      </button>
      {toggleCreate && (
        <div class=" block p-6 rounded-lg shadow-lg bg-primary-200 max-w-sm">
          <p class="text-gray-700 text-base mb-4">
            <div className="w-1/2">
              <form onSubmit={(e) => createEvent(e)}>
                <label for="title">Title</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="title"
                  name="title"
                  type="text"
                  value={event.title}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label for="dateStart">Start Date</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="dateStart"
                  name="dateStart"
                  type="date"
                  value={event.dateStart}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <label for="dateEnd">End Date</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="dateEnd"
                  name="dateEnd"
                  type="date"
                  value={event.dateEnd}
                  onChange={(e) => handleChange(e)}
                />
                <label for="time">Time</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="time"
                  name="timeString"
                  type="text"
                  value={event.timeString}
                  onChange={(e) => handleChange(e)}
                />
                <label for="description">Description</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="description"
                  name="description"
                  type="text"
                  value={event.description}
                  onChange={(e) => handleChange(e)}
                />
                <label for="img">Image</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="img"
                  name="img"
                  type="text"
                  value={event.img}
                  onChange={(e) => handleChange(e)}
                />
                <label for="action">Action</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="action"
                  name="action"
                  type="text"
                  value={event.action}
                  onChange={(e) => handleChange(e)}
                />
                <label for="tag">Tag</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto rounded-sm p-1"
                  placeholder="tag"
                  name="tag"
                  type="text"
                  value={event.tag}
                  onChange={(e) => handleChange(e)}
                />

                <button className="inline-block px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out">
                  SUBMIT
                </button>
              </form>
            </div>
          </p>
        </div>
      )}
    </>
  );
};

export default CreateEvent;
