import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: userName,
      password: password,
    };
    try {
      fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (!data.succes) {
            navigate("/signup");
          }
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex mt-5 justify-content-center">
      <div className="d-flex flex-column" style={{ width: "500px" }}>
        <h6>Log in to your account!</h6>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <label className="text-start" htmlFor="inputUserName">
            user name:
          </label>
          <input
            type="text"
            id="inputUserName"
            className="mb-2"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="text-start" htmlFor="inputPassword">
            Password:
          </label>
          <input
            type="text"
            id="inputPassword"
            className="mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
};

export default Login;
