const { response } = require("express");

const { productosDao } = require("../daos/index.js");

const getProducts = async (req, res = response) => {
  console.log("api called!!!");
  try {
    const products = await productosDao.getAll();
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};
const updateItem = async (item) => {
  s;
  try {
    await productosDao.updateById(item);
  } catch (error) {
    console.log(error);
  }
};

const newItem = async (req, res) => {
  try {
    const item = req.body;
    productosDaosaveI(item);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getProducts, updateItem, newItem };
