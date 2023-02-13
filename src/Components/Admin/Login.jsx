import React, { useState } from "react";

const Login = ( {SET_ACCESS_TOKEN }, ACCESS_TOKEN) => {
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

  const loginUser = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5001/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.access);
        SET_ACCESS_TOKEN(result.access);
        
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

    setLogin({
      username: "",
      password: "",
    });
  };

  return (
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
  );
};

export default Login;
