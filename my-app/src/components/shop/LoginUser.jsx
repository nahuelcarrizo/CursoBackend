import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { MyUser } from "../../context/UserContext";

/* import { createUser } from "../../services/UserService"; */

const LoginUser = ({ children }) => {
  const { createUser, isLog } = useContext(MyUser);
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    console.log("prev");
    e.preventDefault();
    const data = {
      email: mail,
      password: password,
    };
    createUser(data);
  };

  let UserOk = "";
  if (isLog) {
    UserOk = (
      <div className="col-md-7 mrgnbtm align-items-center">
        <h2>Welcome back!</h2>
        <div className="pt-3">
          <Link className="btn btn-dark mb-5" to={"/api/productos/form"}>
            Add new product
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={"container" + (isLog && " d-flex align-items-center")}>
      <div className="row flex-grow-1">
        {isLog ? (
          UserOk
        ) : (
          <div className="col-md-4 mrgnbtm">
            <h2>Admin Acces</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlhtmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="text"
                    onChange={(e) => setMail(e.target.value)}
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlhtmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    name="password"
                    id="password"
                    aria-describedby="passwordHelp"
                    placeholder="Password"
                  />
                </div>
              </div>
              <input type="submit" className="btn btn-danger" value="Log in" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginUser;
