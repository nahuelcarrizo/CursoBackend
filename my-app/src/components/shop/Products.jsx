import React, { useContext } from "react";

import { MyCart } from "../../context/CartContext";
import { MyUser } from "../../context/UserContext";

export const Products = ({ prods, addItem, updateItem }) => {
  const { addQuant } = useContext(MyCart);
  const { isLog } = useContext(MyUser);
  if (prods === undefined) return null;
  const handleBuy = (prod) => {
    addItem(prod);
    addQuant();
  };
  const handleUpdate = (prod) => {
    updateItem(prod);
  };

  const ProdRow = (prod, index) => {
    return (
      <tr key={index}>
        <td>{prod.id}</td>
        <td>
          <img alt="" src={prod.img} className="img-thumbnail w-25" />
        </td>
        <td>{prod.name}</td>
        <td>{prod.price}</td>
        <td>{prod.stock}</td>
        <td>{prod.description}</td>
        <td className="flex-column border-0">
          <button
            onClick={() => handleBuy(prod)}
            className=" btn btn-success m-2"
          >
            Comprar
          </button>
          {isLog && (
            <button
              onClick={() => handleUpdate(prod)}
              className="btn btn-info m-2"
            >
              Actualizar
            </button>
          )}
        </td>
      </tr>
    );
  };

  const prodTable = prods.map((prod, index) => ProdRow(prod, index));

  return (
    <div className="container">
      <h2>Products</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Prod Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{prodTable}</tbody>
      </table>
    </div>
  );
};
