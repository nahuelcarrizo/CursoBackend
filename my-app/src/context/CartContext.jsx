import React, { createContext, useState } from "react";

export const MyCart = createContext({});

export default function CartContext({ children }) {
  const [cant, setCant] = useState(0);

  const addQuant = () => {
    setCant(cant + 1);
  };
  const subtractQuant = () => {
    setCant(cant - 1);
  };

  /*   const removeItem = (id) => {
    const indexed = onCartId.findIndex((el) => el == id);
    onCart.splice(indexed, 1);
    setCart(onCart);
  }; */

  /*   const clearCart = () => {
    setCart([]);
  }; */

  /* function removeItem(itemId) // Remover un item del cart por usando su id
  function clear() // Remover todos los items
  function isInCart: (id) => i | -1  */

  return (
    <MyCart.Provider value={{ addQuant, subtractQuant, cant }}>
      {children}
    </MyCart.Provider>
  );
}
