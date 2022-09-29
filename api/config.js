module.exports = {
  fileSystem: {
    path: "./archivosDB",
  },
  mongodb: {
    cnxStr: "mongodb://localhost:27017/productos",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  sqlite3: {
    client: "sqlite3",
    connection: {
      filename: `./DB/soysustrato.sqlite`,
    },
    useNullAsDefault: true,
  },
};
