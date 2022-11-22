import cluster from "cluster";
import { initServer } from "./server.js";
import os from "os";
import parseArgs from "minimist";

const args = parseArgs(process.argv.slice(2));

const modoCluster = args._[1] == "CLUSTER";

console.log(modoCluster);
const PORT = parseInt(args._[0]) || 8080;
console.log(PORT);

if (modoCluster && cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  console.log(`Master ${process.pid} is running`);
  cluster.on("exit", (worker) => {
    console.log(
      `Worker ${worker.process.pid} died, ${new Date().toLocaleString()}`
    );
    cluster.fork();
  });
} else {
  const app = initServer();
  app.listen(PORT);
  console.log(process.argv);
}
