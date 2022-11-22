import { Server as HttpServer } from "http";
import cors from "cors";
import express from "express";

/* import handlebars from "handlebars"; */

const initServer = () => {
  const app = express();

  const httpServer = new HttpServer(app);
  /* 
  app.engine("hba", handlebars({ extname: "hba", defaultLayout: "index.hba" }));

  app.set("view engine", "hba");

  app.set("views", "./views"); */

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.get("/info", (req, res) => {
    res.json({
      argumentos_de_entrada: process.argv.slice(2),
      nombre_sistema_operativo: process.platform,
      version_node: process.version,
      memoria_total_reservada: process.memoryUsage().rss,
      path_de_ejecucion: process.execPath,
      process_id: process.pid,
      carpeta_del_proyecto: process.cwd(),
    });
  });

  app.get("/randoms", (req, res) => {
    res.send("hello world");
  });

  return {
    listen: (port) => {
      const server = httpServer.listen(port, () => {
        console.log(`App listening on ${port}`);
      });
    },
  };
};

export { initServer };
