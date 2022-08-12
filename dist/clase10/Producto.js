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
        return "cargado";
      } else {
        await fs.promises.writeFile(
          this.url,
          JSON.stringify([{ ...obj, id: 1 }], null, 2)
        );
      }
      return dataParse;
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

  async deletById(req, res) {
    try {
      const id = Number(req.params.id);
      const data = await fs.promises.readFile(
        this.url,
        "utf-8",
        function (err, data) {
          if (err) throw err;
        }
      );
      const dataParse = JSON.parse(data);
      let product = dataParse.find((obj) => obj.id === id);
      if (typeof product === "undefined") {
        res.status(404).json({ error: "Producto no encontrado" });
      } else {
        dataParse.splice(dataParse.indexOf(product), 1);
        fs.writeFile(this.url, JSON.stringify(dataParse), function (err) {
          if (err) throw err;
        });
        res.status(200).json(`Item with id ${id} was deleted`);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    await fs.promises.writeFile(this.url, JSON.stringify([], null, 2), "utf-8");
  }

  async updateById(obj) {
    try {
      const data = await fs.promises.readFile(this.url, "utf-8");
      const dataParse = JSON.parse(data);

      const objIndex = dataParse.findIndex((prod) => prod.id === obj.id);
      if (objIndex !== -1) {
        dataParse[objIndex] = obj; // => array[1] -> {}
        await fs.promises.writeFile(
          this.url,
          JSON.stringify(dataParse, null, 2)
        );
        console.log("actualizado");
        return { msg: "actualizado el producto" };
      } else {
        return { error: "no existe el producto" };
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Producto;
