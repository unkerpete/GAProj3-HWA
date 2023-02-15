import React, { useState } from "react";
import parse from "date-fns/parse";

const Update = (props) => {
  const [updateButton, setUpdateButton] = useState(false);

  const [update, setUpdate] = useState({
    title: props.title,
    dateStart: "",
    dateEnd: "",
    time: "",
    description: props.description,
    img: props.img,
    action: props.action,
    tag: props.tag,
    id: props.id,
  });

  const handleChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const fetchUpdate = (e) => {
    // console.log(1);
    e.preventDefault();

    const bodybody = {
      id: props.id,
      title: update.title,
      dateStart: update.dateStart,
      dateEnd: update.dateEnd,
      time: update.time,
      description: update.description,
      img: update.img,
      action: update.action,
      tag: update.tag,
    };
    // console.log(2);
    bodybody.dateStart = parse(bodybody.dateStart, "yyyy-MM-dd", new Date());
    bodybody.dateEnd = parse(bodybody.dateEnd, "yyyy-MM-dd", new Date());
    // console.log(3);
    fetch("http://127.0.0.1:5001/events/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodybody),
    })
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
      })
      .catch((error) => console.error(error));
  };
  // console.log(4);
  return (
    <>
      <div className="bg-gray-200">
        <button
          className="mx-28 inline-block px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => setUpdateButton(true)}
        >
          Update
        </button>

        {/* when user clicked update button, to display the fomr */}
        {updateButton && (
          <div className="w-1/2">
            {/* <h2>Create event</h2> */}
            <form onSubmit={(e) => fetchUpdate(e)}>
              <input
                placeholder="title"
                name="title"
                type="text"
                value={update.title}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                placeholder="dateStart"
                name="dateStart"
                type="date"
                value={update.dateStart}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <input
                placeholder="dateEnd"
                name="dateEnd"
                type="date"
                value={update.dateEnd}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="time"
                name="time"
                type="text"
                value={update.time}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="description"
                name="description"
                type="text"
                value={update.description}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="img"
                name="img"
                type="text"
                value={update.img}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="action"
                name="action"
                type="text"
                value={update.action}
                onChange={(e) => handleChange(e)}
              />
              <input
                placeholder="tag"
                name="tag"
                type="text"
                value={update.tag}
                onChange={(e) => handleChange(e)}
              />

              <button className=" mx-28 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                SUBMIT
              </button>
            </form>

            <button
              className="mx-28 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => setUpdateButton(false)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Update;
