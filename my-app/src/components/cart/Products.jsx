import React, { useContext } from "react";

import { MyCart } from "../../context/CartContext";

export const Products = ({ prods, deleteItem }) => {
  const { subtractQuant } = useContext(MyCart);
  if (!prods) return <p>Empty Cart</p>;
  console.log("tabla");
  const handleDelete = (prod) => {
    deleteItem(prod);
    subtractQuant();
  };
  const ProdRow = (prod, index) => {
    if (!prod.name) return null;
    return (
      <tr key={index}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
        <td>{prod.price}</td>
        <td>
          {prod.description}
          <button onClick={() => handleDelete(prod)} className="btn btn-danger">
            Eliminar
          </button>
        </td>
      </tr>
    );
  };

  const prodTable = prods.map((prod, index) => ProdRow(prod, index));

  return (
    <div className="container">
      <h2>Products in Cart</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Prod Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{prodTable}</tbody>
      </table>
    </div>
  );
};
