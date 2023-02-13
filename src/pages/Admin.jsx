import React, { useState } from "react";
import CreateEvent from "../Components/Admin/CreateEvents";

const Admin = () => {
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

    fetch("http://127.0.0.1:5001/HWA/admin/create", {
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
    console.log("logged in user");
  };

  return (
    <>
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
      <CreateEvent />
    </>
  );
};

export default Admin;
