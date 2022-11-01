import React, { useEffect, useState } from "react";
import { getHome, logOut } from "../services/LoginServices";

import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const [isLog, setIsLog] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/home")
      .then((res) => res)
      .then((data) => {
        console.log(data.body);
        if (data.redirected) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLog(true));
  }, []);

  const handleLogOut = () => {
    logOut();
    navigate("/session/logout");
  };
  const spinner = (
    <div className="spinner-grow text-dark" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
  return (
    <div className="d-flex mt-5 justify-content-center">
      <div className="d-flex">
        {isLog ? (
          <>
            <h1>Welcome {user}</h1>
            <button className="btn btn-warning" onClick={handleLogOut}>
              Log Out
            </button>
          </>
        ) : (
          <>
            {spinner}
            {spinner}
            {spinner}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
