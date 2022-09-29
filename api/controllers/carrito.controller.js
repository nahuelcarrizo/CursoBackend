const { response } = require("express");

const CarritoDao = require("../daos/index.js");
const routerCarrito = require("../routes/carrito.routes.js");

const getProducts = async (req, res = response) => {
  try {
    const products = await carritoDao.getAll();
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};

const buyItem = async (req, res = response) => {
  try {
    const item = req.body;
    carritoDao.save(item);
  } catch (error) {
    console.log(error);
  }
};

const deleteItem =
  ("/:id",
  async (req, res) => {
    try {
      carritoDao.deletById(req, res);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = { getProducts, buyItem, deleteItem };
