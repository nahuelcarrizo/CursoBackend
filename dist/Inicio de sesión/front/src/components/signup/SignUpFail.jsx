import React, { useState } from "react";

import { login } from "../../services/LoginServices";
import { useNavigate } from "react-router-dom";

const SignUpFail = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: userName,
      password: password,
    };
    login(user);
    navigate("/home");
  };

  return (
    <div className="d-flex mt-5 justify-content-center">
      <h1>Sign Up Fail!</h1>
    </div>
  );
};

export default SignUpFail;
