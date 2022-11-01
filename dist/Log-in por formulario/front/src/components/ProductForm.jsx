import React, { useEffect, useState } from "react";
import { getUser, logOut } from "../services/LoginServices";

import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      setTimeout(() => {
        getUser().then((data) => {
          if (data === undefined) {
            console.log("undefined");
            navigate("/session/login");
          } else {
            setUser(data);
            console.log(data);
          }
        });
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  });

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
        {user !== undefined ? (
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
