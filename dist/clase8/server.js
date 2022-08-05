const express = require("express");
const { Router } = express;
const Producto = require("./Producto");
const PORT = process.env.PORT || 8080;

const app = express();
const routerProductos = Router();
const productos = new Producto("./productos.txt");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/public"));

routerProductos.get("/productos/", async (req, res) => {
  const mostrarProductos = await productos.getAll();
  res.json(mostrarProductos);
});

routerProductos.post("/productos/", async (req, res) => {
  const { title, price } = await req.body;
  productos.save(req.body);

  res.json({ status: "todo ok", title, price });
});

routerProductos.get("/productos/:id", async (req, res) => {
  const { id } = await req.params;
  const producto = await productos.getById(id);
  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send({ error: "Producto no encontrado" });
  }
});

app.use("/api", routerProductos);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
