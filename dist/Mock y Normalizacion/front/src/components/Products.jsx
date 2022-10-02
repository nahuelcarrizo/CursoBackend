import { React, useEffect, useState } from "react";

import { getAll } from "../services/ProductsServices.js";

const Products = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    try {
      getAll().then((prods) => {
        setProds(prods);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const ProdRow = (prod, index) => {
    return (
      <tr key={index}>
        <td className="w-50">
          <img alt="" src={prod.image} />
        </td>
        <td className="align-middle h3">{prod.name}</td>
        <td className="align-middle h3">{prod.price}</td>
      </tr>
    );
  };
  const prodTable = prods.map((prod, index) => ProdRow(prod, index));
  return (
    <div className="container">
      <h2>Products</h2>
      <table className="table table-bordered">
        <thead>
          <th>name</th>
          <th>price</th>
          <th>image</th>
        </thead>
        <tbody>{prodTable}</tbody>
      </table>
    </div>
  );
};

export default Products;
