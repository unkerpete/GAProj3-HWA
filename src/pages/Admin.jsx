import React, { useState } from "react";
import CreateEvent from "../Components/Admin/CreateEvent";
import DisplayEvents from "../Components/Admin/DisplayEvents";
import Login from "../Components/Admin/Login";

const Admin = () => {
  // FIXME: Bring this access token states to parent at App.jsx
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState("");

  return (
    <>
      {/* NO ACCESS TOKEN, THEN DISPLAY THIS */}
      {!ACCESS_TOKEN && (
        <Login
          SET_ACCESS_TOKEN={SET_ACCESS_TOKEN}
          ACCESS_TOKEN={ACCESS_TOKEN}
        />
      )}

      {/* HAVE ACCESS TOKEN, THEN DISPLAY THIS */}
      {ACCESS_TOKEN && (

      <div className="">
        <div className="grid grid-cols-2">
          <div className="col-span-1 mx-auto my-20 border-1 border-primary-800">
            <div className="border-2 border-gray-200 p-20 m-20 rounded-3xl">
              <h3 className="mx-24 pl-2" >Create Event</h3>
              <p className="pl-6 font-DM text-xl font-normal">Creating events for upcoming events</p>
              <CreateEvent />
            </div>
          </div>
          <div className="col-span-1 mx-auto my-20">
            <div className="border-2 border-gray-200 p-16 m-20 rounded-3xl">
              <h3 className="mx-36 pl-4">Display Events</h3>
              <p className="pl-36 font-DM text-xl font-normal">Display events in database
              <br/>Update and Delete here</p>
              <DisplayEvents />
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default Admin;
