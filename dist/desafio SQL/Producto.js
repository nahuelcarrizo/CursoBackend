const knex = require("knex");

class Producto {
  constructor(options, tableName) {
    this.options = options;
    this.tableName = tableName;
    this.knex = knex(this.options);
  }
  async createTable() {
    try {
      await this.knex.schema
        .createTable(this.tableName, (table) => {
          table.string("title");
          table.string("description");
          table.integer("price");
          table.integer("stock");
          table.string("url");
          table.increments("id");
          if (this.tableName === "cart") {
            table.integer(1);
          }
        })
        .then(() => console.log("tabla creada"));
    } catch (error) {
      console.log(error);
    } finally {
      () => this.knex.destroy();
    }
  }
  async save(obj) {
    try {
      const exists = await this.knex.schema
        .hasTable(this.tableName)
        .then((exists) => exists);
      if (exists === false) {
        await this.createTable();
      }
      await this.knex(this.tableName)
        .insert(obj)
        .then(() => console.log("obj guardado"));
    } catch (error) {
      console.log(error);
    } finally {
      () => {
        this.knex.destroy();
      };
    }
  }
  async saveToCart(obj) {
    try {
      const exists = await this.knex.schema
        .hasTable(this.tableName)
        .then((exists) => exists);
      if (exists === false) {
        await this.createTable();
      }
      const prod = await this.knex.from("products").where("id", "=", obj.id);
      const isInCart = await this.knex.from("cart").where("id", "=", obj.id);
      if (isInCart.length == 0) {
        await this.knex(this.tableName)
          .insert(prod)
          .then(() => console.log("obj en cart guardado"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      () => {
        console.log(inInCart == true);
        this.knex.destroy();
      };
    }
  }
  async getAll() {
    try {
      const prods = await this.knex.from(this.tableName).select("*");
      return prods;
    } catch (error) {
      console.log(error);
    } finally {
      () => this.knex.destroy();
    }
  }
  /* async deletById(req, res) {
    try {
      const id = Number(req.params.id);
      const data = await this.knex
        .from(this.tableName)
        .select("*")
        .where("id", "=", id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  } */
}

module.exports = Producto;
