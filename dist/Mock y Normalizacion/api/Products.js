import { knex } from "knex";

class Products {
  constructor(options, tableName) {
    this.options = options;
    this.tableName = tableName;
    this.knex = knex(this.options);
  }

  async createTable() {
    try {
      await this.knex.schema
        .createTable(this.tableName, (table) => {
          table.string("name");
          table.string("price");
          table.string("img");
        })
        .then(() => console.log("tabla creada"));
    } catch (error) {
      console.log(error);
    } finally {
      () => this.knex.destroy();
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
}

export default Products;
