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

routerProductos.get("/", async (req, res) => {
  const mostrarProductos = await productos.getAll();
  res.json(mostrarProductos);
});

routerProductos.post("/", async (req, res) => {
  const { title, price, thumbnail } = await req.body;
  productos.save(req.body);

  res.json({ status: "todo ok", title, price, thumbnail });
});

routerProductos.put("/:id", async (req, res) => {
  productos.updateById(req.body);
  res.status(200).json({ status: "archivo actualizado" });
});

routerProductos.get("/:id", async (req, res) => {
  try {
    const { id } = await req.params;
    const producto = await productos.getById(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).send({ error: "Producto no encontrado" });
    }
  } catch (error) {
    console.log(error);
  }
});

routerProductos.delete("/:id", async (req, res) => {
  await console.log("DELETE");
  try {
    const producto = productos.deletById(req, res);
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/productos", routerProductos);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
