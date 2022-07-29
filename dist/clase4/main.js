const Producto = require("./Producto");

const producto = new Producto("./prueba.txt");

/* producto.save({ title: "prd3", price: 150, thumbnail: "./prd1.jpeg" }); */

/* producto.getById(2); */

producto.getAll();
