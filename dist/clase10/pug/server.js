const express = require("express");
const Producto = require("../Producto");
const app = express();
const { Router } = express;
const PORT = 4000 || process.env.PORT;
const routerProductos = Router();
const productos = new Producto("../productos.txt");

const pug = require("pug");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/public"));
app.use("/api/productos", routerProductos);

app.set("views", "./views");
app.set("view engine", "pug");

routerProductos.get("/", (req, res) => {
  res.render("index");
});

routerProductos.get("/listaproductos/", async (req, res) => {
  const prods = await productos.getAll();
  res.render("productos", { prods: prods });
});

routerProductos.post("/", async (req, res) => {
  productos.save(req.body);
  res.status(200).render("index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
