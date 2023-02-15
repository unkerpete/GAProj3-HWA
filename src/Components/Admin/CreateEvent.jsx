import React, { useState } from "react";
import parse from "date-fns/parse";
import axios from "axios";
import { buffer } from "buffer";

const CreateEvent = () => {
  const [toggleCreate, setToggleCreate] = useState(false);
  const [file, setFile] = useState(null);

  const [event, setEvent] = useState({
    title: "abc",
    dateStart: "",
    dateEnd: "",
    timeString: "0900",
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

  // const createEvent = (e) => {
  //   e.preventDefault();

  //   // convert date string to date object
  //   const body = event;
  //   console.log(body);
  //   // 13/02/2023 -> date  object using date-fns
  //   // date is formatted as "2023-02-14" when clicked on calendar
  //   body.dateStart = parse(body.dateStart, "yyyy-MM-dd", new Date());
  //   body.dateEnd = parse(body.dateEnd, "yyyy-MM-dd", new Date());
  //   console.log(body.dateStart);

  //   fetch("http://127.0.0.1:5001/events/create", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((response) => response.json())
  //     .then((results) => {
  //       console.log(results);
  //     })
  //     .catch((error) => console.error(error));

  //   setEvent({
  //     title: "",
  //     dateStart: "",
  //     dateEnd: "",
  //     time: "",
  //     description: "",
  //     img: "",
  //     action: "",
  //     tag: "",
  //   });
  // };

  const createEvent = async (e) => {
    e.preventDefault();
    const formData = new FormData(); // create an empty form data object

    // populate the form data object with input data
    formData.append("title", event.title);
    formData.append("dateStart", event.dateStart);
    formData.append("dateEnd", event.dateEnd);
    formData.append("timeString", event.timeString);
    formData.append("description", event.description);
    formData.append("eventImg", file);
    formData.append("action", event.action);
    formData.append("tag", event.tag);

    // pass the form data object to the server endpoint
    try {
      const response = await axios.put(
        "http://localhost:5001/events/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }

    // unable to console log the form data directly. need to deconstruct to view as per below
    for (const pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  const handleToggle = () => {
    setToggleCreate(!toggleCreate);
  };

  return (
    <>
      <button
        className="inline-block px-6 py-2.5 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleToggle}
      >
        Create Event
      </button>
      {toggleCreate && (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <span className="text-gray-700 text-base mb-4">
            <div className="w-1/2">
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
                  name="timeString"
                  type="text"
                  value={event.timeString}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  placeholder="description"
                  name="description"
                  type="text"
                  value={event.description}
                  onChange={(e) => handleChange(e)}
                />

                {/* TODO: MODIFY THIS */}
                <input
                  placeholder="img"
                  name="img"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
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
          </span>
        </div>
      )}
    </>
  );
};

export default CreateEvent;
