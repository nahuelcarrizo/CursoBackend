const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDB");

class CarritoDaoMongoDB extends ContenedorMongoDB {
  constructor() {
    super("carrito", {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      description: { type: String, required: true },
      stock: { type: Number, required: true },
      img: { type: String, required: true },
    });
  }
}

module.exports = CarritoDaoMongoDB;
