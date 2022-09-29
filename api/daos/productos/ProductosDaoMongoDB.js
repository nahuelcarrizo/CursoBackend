const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDB.js");

class ProductosDaoMongoDB extends ContenedorMongoDB {
  constructor() {
    super("productos", {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      stock: { type: Number, required: true },
      imag: { type: String, required: true },
    });
  }
}
module.exports = ProductosDaoMongoDB;
