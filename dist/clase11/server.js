const express = require("express");
const { Server: ServerHTTP } = require("http");
const { Server: ServerIO } = require("socket.io");
const app = express();
const serverHTTP = new ServerHTTP(app);
const IO = new ServerIO(serverHTTP);
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("index.html", { root: __dirname });
});

IO.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("mensaje-server", "hola cliente");
});

serverHTTP.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
