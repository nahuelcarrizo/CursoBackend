const fs = require("fs");

class Producto {
  constructor(url) {
    this.url = url;
  }
  async save(obj) {
    try {
      console.log(obj);
      let data = await fs.promises.readFile(this.url, "utf-8");
      let dataParse = JSON.parse(data);
      if (dataParse.length) {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify(
            [
              ...dataParse,
              { ...obj, id: dataParse[dataParse.length - 1].id + 1 },
            ],
            null,
            2
          )
        );
      } else {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify([{ ...obj, id: 1 }], null, 2)
        );
      }
      console.log(
        `El archivo tiene el id: ${dataParse[dataParse.length - 1].id + 1}`
      );
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id) {
    try {
      const data = await fs.promises.readFile("./productos.txt", "utf-8");
      const dataParse = JSON.parse(data);
      console.log(dataParse);
      console.log(id);
      const product = dataParse.find((obj) => obj.id == id);
      if (product) {
        return product;
      }
    } catch (error) {}
  }

  async getAll() {
    try {
      const data = await fs.promises.readFile(this.url, "utf-8");
      const dataParse = await JSON.parse(data);
      if (dataParse.length) {
        return dataParse;
      } else {
        console.log("no hay producto");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deletById(id) {
    try {
      const data = await fs.promises.readFile(this.url, "utf-8");
      const dataParse = JSON.parse(data);
      let product = dataParse.find((obj) => obj.id === id);
      if (product) {
        let dataParsefiltered = dataParse.filter(
          (product) => product.id !== id
        );
        await fs.promises.writeFile(
          this.url,
          JSON.stringify(dataParsefiltered),
          "utf-8"
        );
        console.log("producto eliminado");
      } else {
        console.log("no existe el producto");
      }

      console.log(dataParse);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    await fs.promises.writeFile(this.url, JSON.stringify([], null, 2), "utf-8");
  }
}

module.exports = Producto;
