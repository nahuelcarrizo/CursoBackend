const fs = require("fs");

const ContenedorArchivo = require("../../contenedores/ContenedorArchivo.js");

class ProductosDaoArchivos extends ContenedorArchivo {
  constructor() {
    super("./archivosDB/productos.txt");
  }
  async saveI(obj) {
    try {
      console.log(this);
      let data = await this.readFileFunction(this.url);
      console.log(typeof obj);

      if (data.length) {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify(
            [
              ...data,
              {
                ...obj,

                id: data[data.length - 1].id + 1,
              },
            ],
            null,
            2
          ),
          function (err) {
            if (err) throw err;
          }
        );
      } else {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify([{ ...obj, id: 1 }], null, 2)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { ProductosDaoArchivos };
