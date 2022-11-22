import cluster from "cluster";
import http from "http";
import os from "os";
import parseArgs from "minimist";

const numCPUs = os.cpus().length;

const args = parseArgs(process.argv.slice(2));

const modoCluster = args._[1] == "CLUSTER";

const PORT = parseInt(args._[0]) || 8080;

if (modoCluster && cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("hello world");
    })
    .listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });

  console.log(`Worker ${process.pid} started`);
}
