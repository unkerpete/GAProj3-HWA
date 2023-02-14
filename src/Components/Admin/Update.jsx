import React, { useState } from "react";

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

  const fetchUpdate = async () => {
    const body = {
      title: update.title,
      dateStart: update.dateStart,
      dateEnd: update.dateEnd,
      time: update.time,
      description: update.description,
      img: update.img,
      action: update.action,
      tag: update.tag,
      id: props.id,
    };

    // fetchUpdate(url, {
    //   method: "POST",
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
      <div className="bg-gray-200 border-2 border-gray-500">
        <button
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => setUpdateButton(true)}
        >
          Update
        </button>
        {updateButton && (
          <div className="w-1/2">
            {/* <h2>Create event</h2> */}
            <form onSubmit={(e) => createEvent(e)}>
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

              <button className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                SUBMIT
              </button>
            </form>
            <button
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setUpdateButton(false)}>Close</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Update;
