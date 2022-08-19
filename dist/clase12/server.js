const express = require("express");
const { Router } = express;
const { Server: HTTPserver } = require("http");
const { Server: IOserver } = require("socket.io");
const Producto = require("./Producto");
const productos = new Producto("./productos.txt");

const app = express();
const routerProductos = Router();
const httpServer = new HTTPserver(app);
const io = new IOserver(httpServer);

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", routerProductos);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./public/views/layouts");

routerProductos.get("/", async (req, res) => {
  const prods = await productos.getAll();
  res.render("index");
});

const products = [];
const chat = [];

io.on("connection", async (socket) => {
  io.sockets.emit("mensaje-servidor", products);
  io.sockets.emit("chat-servidor", chat);
  socket.on("producto-nuevo", (product) => {
    products.push(product);
    io.sockets.emit("mensaje-servidor", products);
  });
  socket.on("mensaje-nuevo", (mensaje) => {
    chat.push(mensaje);
    io.sockets.emit("chat-servidor", chat);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
