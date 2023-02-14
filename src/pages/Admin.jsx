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
        <div className="grid grid-cols-2">
          <div className="col-span-1"><CreateEvent /></div>
          <div className="col-span-1 mb-10"> <DisplayEvents /></div>
        </div>
      )}
    </>
  );
};

export default Admin;
