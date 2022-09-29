import React, { useContext, useEffect, useState } from "react";
import { buyItem, getAll, updateItem } from "../../services/ShopService";

import LoginUser from "./LoginUser";
import { MyUser } from "../../context/UserContext";
import { Products } from "./Products";

export default function Shop() {
  const { createUser } = useContext(MyUser);
  const [prods, setProds] = useState([]);
  const [user, setUser] = useState([]);

  const userCreate = (e) => {
    createUser(user);
  };

  /*   const fetchAllUsers = () => {
      getAllUsers().then((users) => {
        console.log(users);
        setUsers(users);
        setNumberOfUsers(users.length);
      });
    };
   */
  const handleBuy = (item) => {
    buyItem(item);
  };
  const handleUpdate = (item) => {
    updateItem(item);
  };

  useEffect(() => {
    try {
      getAll().then((prods) => {
        setProds(prods);
        console.log(prods);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onChangeForm = (e) => {
    console.log("form");
    if (e.target.name === "firstname") {
      user.firstName = e.target.value;
    } else if (e.target.name === "lastname") {
      user.lastName = e.target.value;
    } else if (e.target.name === "email") {
      user.email = e.target.value;
    }
    setUser(user);
  };

  return (
    <>
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col">
            <LoginUser
              onChangeForm={onChangeForm}
              createUser={userCreate}
            ></LoginUser>
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Products
          prods={prods}
          addItem={handleBuy}
          updateItem={handleUpdate}
        ></Products>
      </div>
    </>
  );
}
