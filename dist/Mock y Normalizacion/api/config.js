export default {
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
  mariadb: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "soysustrato",
    },
  },
};
