const express = require("express");
const app = express();
const { Router } = express;
const PORT = process.env.PORT || 4000;
const routerProductos = Router();
const Producto = require("../Producto");
const productos = new Producto("../productos.txt");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/productos", routerProductos);

app.set("view engine", "ejs");
app.set("views", "./views/layouts");

routerProductos.get("/", (req, res) => {
  res.render("index");
});

routerProductos.get("/listaproductos/", async (req, res) => {
  const prods = await productos.getAll();
  res.render("products", { prods: prods });
});

routerProductos.post("/", async (req, res) => {
  productos.save(req.body);
  res.status(200).render("/layouts/index");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
