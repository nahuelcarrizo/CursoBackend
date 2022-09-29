const fs = require("fs");
const ContenedorArchivo = require("../../contenedores/ContenedorArchivo.js");

class CarritoDaoArchivos extends ContenedorArchivo {
  constructor() {
    super("./archivosDB/carrito.txt");
  }
  async save(obj) {
    try {
      let data = await this.readFileFunction("./archivosDB/carrito.txt");
      const indexed = data.findIndex((el) => el.id === obj.id);
      console.log(indexed);

      const timeStamp = Date.now();
      if (data.length) {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify(
            [
              ...data,
              {
                ...obj,
                id: data[data.length - 1].id + 1,
                quantity: 1,
                timestamp: timeStamp,
              },
            ],
            null,
            2
          )
        );
      } else {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify(
            [
              { idCarrito: Math.random() },
              { ...obj, id: 1, quantity: 1, timestamp: timeStamp },
            ],
            null,
            2
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CarritoDaoArchivos;
