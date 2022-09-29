let productosDao;
let carritoDao;

async function trySwitch() {
  switch (process.env.PERS) {
    case true:
      const {
        ProductosDaoArchivo,
      } = async () => await import("./productos/ProductosDaoArchivo.js");
      console.log("ii" + ProductosDaoArchivo);
      const {
        default: CarritoDaoArchivo,
      } = async () => await import("./carrito/CarritoDaoArchivo.js");
      productosDao = new ProductosDaoArchivo();
      carritoDao = new CarritoDaoArchivo();
      break;
    case "mongodb":
      const {
        default: ProductosDaoMongoDB,
      } = async () => await import("./productos/ProductosDaoMongoDB.js");
      const {
        default: CarritoDaoMongoDB,
      } = async () => await import("./carrito/CarritoDaoMongoDB.js");
      productosDao = new ProductosDaoArchivo();
      carritoDao = new CarritoDaoArchivo();
      break;

    default:
      break;
  }
}

trySwitch();

exports.module = { productosDao, carritoDao };
