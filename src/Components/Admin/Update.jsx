import React, { useContext, useState } from "react";
import parse from "date-fns/parse";
import axios from "axios";
import tabContext from "../../context/tabContext";

const Update = (props) => {
  const ctx = useContext(tabContext)
  const [updateButton, setUpdateButton] = useState(false);
  const [file, setFile] = useState(null);

  const [update, setUpdate] = useState({
    title: props.title,
    dateStart: "",
    dateEnd: "",
    time: "",
    description: props.description,
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

  // Function to update the events
  const fetchUpdate = async (e) => {
    // console.log(1);
    e.preventDefault();
    const formData = new FormData(); // create an empty form data object

    formData.append("title", update.title);
    formData.append("dateStart", update.dateStart);
    formData.append("dateEnd", update.dateEnd);
    formData.append("timeString", update.timeString);
    formData.append("description", update.description);
    formData.append("action", update.action);
    formData.append("tag", update.tag);
    formData.append("eventImg", file);
    formData.append("id", update.id);

    // pass the form data object to the server endpoint
    try {
      const response = await axios.patch(
        "http://localhost:5001/events/update",
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
  };

  return (
    <>
      <div className="bg-primary-400 rounded-lg">
        <div className="flex flex-col">
          <button
            className="flex justify-center px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => setUpdateButton(true)}
          >
            Update
          </button>
        </div>

        {/* when user clicked update button, to display the fomr */}
        {updateButton && (
          <div className="block py-6 px-2 rounded-lg shadow-lg bg-primary-400 max-w-sm">
            <span className="font-DM text-base font-normal">
              <div className="pl-20 w-1/2">
                <button
                  className="mx-14 inline-block px-7 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => setUpdateButton(false)}
                >
                  Close
                </button>
                <form className="" onSubmit={(e) => fetchUpdate(e)}>
                  <label for="title">Title</label>
                  <input
                    className="border-2 border-lightgray-200 mb-2 rounded-lg p-1"
                    placeholder="title"
                    name="title"
                    type="text"
                    value={update.title}
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
                    value={update.dateStart}
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
                    value={update.dateEnd}
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="time">Time</label>
                  <input
                    className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                    placeholder="time"
                    name="timeString"
                    type="text"
                    value={update.timeString}
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="description">Description</label>
                  <input
                    className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                    placeholder="description"
                    name="description"
                    type="text"
                    value={update.description}
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
                    value={update.action}
                    onChange={(e) => handleChange(e)}
                  />
                  <label for="tag">Tag</label>
                  <input
                    className="border-2 border-lightgray-200 mx-auto mb-2 rounded-lg p-1"
                    placeholder="tag"
                    name="tag"
                    type="text"
                    value={update.tag}
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
      </div>
    </>
  );
};

export default Update;
