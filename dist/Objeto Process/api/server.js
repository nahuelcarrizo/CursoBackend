import express from "express";
import { fork } from "child_process";
import parseArgs from "minimist";

const app = express();

const args = parseArgs(process.argv.slice(2));

const PORT = args._[0] || 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api/randoms", (req, res) => {
  const { cant } = req.query;
  const forked = fork("./child.js");
  let obj = {};
  cant ? forked.send({ cant, obj }) : forked.send({ cant: 100000000, obj });
  forked.on("message", (response) => {
    res.json({ response });
  });
});

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

app.listen(PORT, (err) => {
  if (err) throw new Error(`Server error: ${err}`);
  console.log(`Server running on port ${PORT}`);
});
