import React, { useContext } from "react";

import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MyCart } from "../../context/CartContext";

export const CartWidget = () => {
  const { cant } = useContext(MyCart);

  return (
    <>
      <li className="nav-item">
        <Link className="icon-button" to={"/api/carrito"}>
          <FaShoppingBag className="text-dark h3 m-0" />
        </Link>
        <span
          id="carritoNumero"
          className="badge rounded-circle bg-white text-dark"
        >
          {cant}
        </span>
      </li>
    </>
  );
};
