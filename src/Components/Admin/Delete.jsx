import React from "react";

const Delete = ({ eventId }) => {
  const deleteEvent = async () => {
    const url = "http://127.0.0.1:5001/events/delete";
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       id: `${eventId}`,
      }),
  
    });
    console.log(eventId);
  };

  return (
    <div className="mx-28">
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={deleteEvent}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};

export default Delete;
