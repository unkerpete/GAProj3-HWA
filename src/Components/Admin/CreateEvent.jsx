import React, { useContext, useState } from "react";
import parse from "date-fns/parse";
import axios from "axios";
import { Buffer } from "buffer";
import tabContext from "../../context/tabContext";

const CreateEvent = () => {
  const ctx = useContext(tabContext)
  const [toggleCreate, setToggleCreate] = useState(false);
  const [file, setFile] = useState(null);

  const [event, setEvent] = useState({
    title: "",
    dateStart: "",
    dateEnd: "",
    timeString: "",
    description: "",
    action: "",
    tag: "",
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

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
            Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
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
        className=" inline-block ml-28 my-6 px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleToggle}
      >
        Create Event
      </button>
      {toggleCreate && (
        <div className="block py-6 px-2 rounded-lg shadow-lg bg-primary-200 max-w-sm">
          <span className="font-DM text-base font-normal">
            <div className="pl-20 w-1/2">
              <form className="" onSubmit={(e) => createEvent(e)}>
                <label for="title">Title</label>
                <input
                  className="border-2 border-lightgray-200 mb-2 rounded-lg p-1"
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
                  className="border-2 border-lightgray-200 pr-8 mb-2 rounded-lg p-1"
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
                  className="border-2 border-lightgray-200 pr-8 mb-2 rounded-lg p-1"
                  placeholder="dateEnd"
                  name="dateEnd"
                  type="date"
                  value={event.dateEnd}
                  onChange={(e) => handleChange(e)}
                />
                <label for="time">Time</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="time"
                  name="timeString"
                  type="text"
                  value={event.timeString}
                  onChange={(e) => handleChange(e)}
                />
                <label for="description">Description</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="description"
                  name="description"
                  type="text"
                  value={event.description}
                  onChange={(e) => handleChange(e)}
                />
                <label for="img">Image</label>
                <input
                  
                  placeholder="img"
                  name="img"
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label for="action">Action</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="action"
                  name="action"
                  type="text"
                  value={event.action}
                  onChange={(e) => handleChange(e)}
                />
                <label for="tag">Tag</label>
                <input
                  className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                  placeholder="tag"
                  name="tag"
                  type="text"
                  value={event.tag}
                  onChange={(e) => handleChange(e)}
                />

                <button className="mt-3 mx-14 inline-block px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out">
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
