import React, { useState } from "react";
import CreateEvent from "../Components/Admin/CreateEvents";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const createUser = (e) => {
    e.preventDefault();
    console.log("created user");

    fetch("http://127.0.0.1:5001/admin/create", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const loginUser = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5001/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setIsLoggedIn(true);
  };

  return (
    <>
      
      {!isLoggedIn && (
        <div>
          <h3>Enter Login Details</h3>
          <form className="m-4" onSubmit={(e) => loginUser(e)}>
            <input
              className="border-2 border-black-500"
              placeholder="username"
              type="text"
              onChange={(e) => {
                handleChange(e);
              }}
              value={login.username}
              name="username"
            ></input>
            <br />
            <input
              className="border-2 border-black-500"
              placeholder="password"
              type="text"
              onChange={(e) => {
                handleChange(e);
              }}
              value={login.password}
              name="password"
            ></input>
            <br />
            <button className="bg-gray-200 p-2 rounded" placeholder="submit">
              Submit
            </button>
            <button
              className="bg-gray-200 p-2 rounded"
              placeholder="create"
              onClick={(e) => createUser(e)}
            >
              create
            </button>
          </form>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
                Create Event
              </h5>
              <p class="text-gray-700 text-base mb-4">
              <CreateEvent />
              </p>
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Create
              </button>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default Admin;
