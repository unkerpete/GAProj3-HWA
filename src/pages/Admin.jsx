import React, { useState } from "react";
import CreateEvent from "../Components/Admin/CreateEvents";
import Login from "../Components/Admin/Login";


const Admin = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ACCESS_TOKEN, SET_ACCESS_TOKEN] = useState("");

  return (
    <>
      {ACCESS_TOKEN === "" ? (
        <Login
          SET_ACCESS_TOKEN={SET_ACCESS_TOKEN}
          ACCESS_TOKEN={ACCESS_TOKEN}
        />
      ) : (
        <div>
          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                Create Event
              </h5>
              <p class="text-gray-700 text-base mb-4">
                <CreateEvent />
              </p>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Admin;
