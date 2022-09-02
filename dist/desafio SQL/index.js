const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
const { Router } = express;
const PORT = process.env.PORT || 8080;
const routerProductos = Router();
const routerCarrito = Router();
const Producto = require("./Producto");
const { optionsMDB, optionsSQL3 } = require("./options/conexionDB");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/productos", routerProductos);
app.use("/api/carrito/", routerCarrito);

app.set("view engine", "ejs");
app.set("views", "./public/views/layouts");

let admin = true;

//////////////////PRODUCTOS
routerProductos.get("/", (req, res) => {
  res.render("index");
});

routerProductos.get("/listaproductos/", async (req, res) => {
  const productos = new Producto(optionsMDB, "products");
  const prods = await productos.getAll();
  res.render("products", { prods: prods });
});

routerProductos.post("/listaproductos/", async (req, res) => {
  const productos = new Producto(optionsMDB, "cart");
  await productos.saveToCart(req.body);
  /*   res.render("products");
   */
});

routerProductos.post("/", async (req, res) => {
  if (admin) {
    const productos = new Producto(optionsMDB, "products");
    await productos.save(req.body);
    res.status(200).render("index");
  } else {
    res.json({ error: -2, descripcion: "ruta 'x' método 'y' no implementada" });
  }
});

//////////////////CARRITO
routerCarrito.get("/", async (req, res) => {
  try {
    const productos = new Producto(optionsMDB, "cart");
    const prods = await productos.getAll();
    console.log(prods);
    res.render("cart", { prods: prods });
  } catch (error) {
    console.log(error);
  }
});

/* routerCarrito.post("/", async (req, res) => {
  try {
    res.status(200).render("/layouts/cart");
  } catch (error) {
    console.log(error);
  }
}); */

routerCarrito.post("/", async (req, res) => {
  console.log("delete");
  try {
    const carrito = new Carrito("./carrito.txt");
    await carrito.deletById(req, res);
  } catch (error) {
    console.log(error);
  } finally {
    const carrito = new Carrito("./carrito.txt");
    const prods = await carrito.getAll();
    console.log(prods);
    res.render("cart", { prods: prods });
  }
});

/* routerCarrito.delete("/", async (req, res) => {
  try {
    const carrito = new Carrito("./carrito.txt");
    const producto = await carrito.deleteAll();
    if (producto) {
      const prods = await carrito.getAll();
      res.render("cart", { prods: prods });
    }
  } catch (error) {
    console.log(error);
  }
}); */

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
