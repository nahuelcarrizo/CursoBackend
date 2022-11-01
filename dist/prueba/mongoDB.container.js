/* 
class ContenedorMongoDB {
  constructor() {
    this.coleccion = mongoose.model("users", {
      username: { type: String, required: true },
      password: { type: String, required: true },
    });
  }

  async getOne(user) {
    try {
      let doc = await this.coleccion.find({ username: user.username });
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
 */
