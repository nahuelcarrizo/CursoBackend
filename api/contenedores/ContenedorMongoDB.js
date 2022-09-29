const mongoose = require("mongoose");
const config = require("../config.js");

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

class ContenedorMongoDB {
  constructor(nombreColeccion, esquema) {
    this.coleccion = mongoose.model(nombreColeccion, esquema);
  }

  async getAll() {
    try {
      let docs = await this.coleccion.find({});
      console.log(docs);
      return docs;
    } catch (error) {
      console.log(error);
    }
  }

  async save(item) {
    try {
      let doc = await this.coleccion.create(item);
      return doc;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ContenedorMongoDB;
