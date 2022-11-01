import config from "../config.js";
import mongoose from "mongoose";

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
  constructor() {
    this.coleccion = mongoose.model("users", {
      username: { type: String, required: true },
      password: { type: String, required: true },
    });
  }

  async getOne(user) {
    try {
      let doc = await this.coleccion.find({ username: user });
      return doc;
    } catch (error) {
      console.log(error);
    }
  }

  async save(user) {
    try {
      let doc = await this.coleccion.create(user);
      return doc;
    } catch (error) {
      console.log(error);
    }
  }
}

const contenedorMongoDB = new ContenedorMongoDB();

export default contenedorMongoDB;
