import React, { useContext } from "react";
import tabContext from "../../context/tabContext";

const Delete = ({ eventId }) => {
  const ctx = useContext(tabContext)

  const deleteEvent = () => {
    fetch("http://127.0.0.1:5001/events/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ctx.ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        id: `${eventId}`,
      }),
    })
      .then((response) => response.json())
      .then((results) => {
        console.log(results);
      })
      .catch((error) => console.error(error));

    console.log(eventId);
  };

  return (
    <>
    
      <button
        className="inline-block mr-4 my-2 px-6 py-2.5 bg-primary-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-800 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={deleteEvent}
      >
        
        Delete
      </button>
    
    </>
  );
};

export default Delete;
