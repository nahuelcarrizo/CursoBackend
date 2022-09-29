import React, { useEffect, useState } from "react";
import { deleteItem, getAll } from "../../services/CartService";

import { Products } from "./Products";

export default function Cart() {
  const [prods, setProds] = useState([]);

  const handleDelete = (item) => {
    deleteItem(item); /* .then(getAll().then((prods) => setProds(prods))); */
  };

  useEffect(() => {
    try {
      getAll()
        .then((prods) => {
          console.log("useeffect");
          setProds(prods);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div className="container mrgnbtm">
        <div className="row mrgnbtm">
          <Products prods={prods} deleteItem={handleDelete}></Products>
        </div>
      </div>
    </>
  );
}
