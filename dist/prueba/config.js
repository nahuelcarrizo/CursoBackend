module.exports = {
  mongodb: {
    cnxStr:
      "mongodb+srv://nahuel:nahuel123@cluster1.dio4x4x.mongodb.net/?retryWrites=true&w=majority",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  cors: {
    server: [{ origin: "localhost:5173", credentials: true }],
  },
};
