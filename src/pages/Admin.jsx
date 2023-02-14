import React, { useState } from "react";
import CreateEvent from "../Components/Admin/CreateEvent";
import DisplayEvents from "../Components/Admin/DisplayEvents";
import Login from "../Components/Admin/Login";

const Admin = () => {
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState("");
  const [updateClicked, setUpdateClicked] = useState(false);

  return (
    <>
      {ACCESS_TOKEN === "" ? (
        <Login
          SET_ACCESS_TOKEN={SET_ACCESS_TOKEN}
          ACCESS_TOKEN={ACCESS_TOKEN}
        />
      ) : (
        <div>{console.log("error. please login again")}</div>
      )}
      {ACCESS_TOKEN && (
        <div>
          <CreateEvent />
          <DisplayEvents />
        </div>
      )}
    </>
  );
};

export default Admin;
