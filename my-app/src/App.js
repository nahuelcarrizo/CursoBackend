import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart, Header, ProductForm, Shop } from "./components/index";

import CartContext from "./context/CartContext";
import React from "react";
import UserContext from "./context/UserContext";

function App() {
  return (
    <CartContext>
      <UserContext>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/api/carrito" element={<Cart />} />
              <Route path="/api/productos/form" element={<ProductForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserContext>
    </CartContext>
  );
}

export default App;
