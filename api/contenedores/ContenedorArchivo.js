const fs = require("fs");

class ContenedorArchivo {
  constructor(url) {
    this.url = url;
  }

  async readFileFunction(url) {
    try {
      let file = await fs.promises.readFile(url, "utf-8");
      let fileParsed = await JSON.parse(file);
      return fileParsed;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const product = data.find((obj) => obj.id == id);
      if (product) {
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const data = await this.readFileFunction(this.url);
      if (data.length) {
        return data;
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
      const data = await this.readFileFunction(this.url);
      console.log(data);
      let product = data.find((obj) => obj.id === id);
      data.splice(data.indexOf(product), 1);
      fs.writeFile(this.url, JSON.stringify(data), function (err) {
        if (err) throw err;
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    await fs.promises.writeFile(this.url, JSON.stringify([], null, 2), "utf-8");
  }

  async updateById(obj) {
    try {
      const data = await this.readFileFunction(this.url);
      const objIndex = data.findIndex((prod) => prod.id === obj.id);
      if (objIndex !== -1) {
        data[objIndex] = obj; // => array[1] -> {}
        await fs.promises.writeFile(this.url, JSON.stringify(data, null, 2));
        console.log("actualizado");
      } else {
        return { error: "no existe el producto" };S
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ContenedorArchivo;
