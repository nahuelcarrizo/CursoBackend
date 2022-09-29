const express = require("express");
const {
  getProducts,
  buyItem,
  deleteItem,
} = require("../controllers/carrito.controller.js");
const routerCarrito = express.Router();

routerCarrito.get("/", getProducts);
routerCarrito.post("/", buyItem);
routerCarrito.delete("/:id", deleteItem);
routerCarrito.put("/:id");

module.exports = routerCarrito;
