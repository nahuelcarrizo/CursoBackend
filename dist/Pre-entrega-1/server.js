const express = require("express");
const app = express();
const { Router } = express;
const PORT = process.env.PORT || 8080;
const routerProductos = Router();
const routerCarrito = Router();
const Producto = require("./Producto");
const productos = new Producto("./productos.txt");
const Carrito = require("./Carrito");
const e = require("express");

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
  const prods = await productos.getAll();
  res.render("products", { prods: prods });
});

routerProductos.post("/listaproductos/", async (req, res) => {
  const timeStamp = Date.now();
  const carrito = new Carrito("./carrito.txt", timeStamp);
  carrito.save(req.body);
  /*   res.render("products");
   */
});

routerProductos.post("/", async (req, res) => {
  if (admin) {
    productos.save(req.body);
    res.status(200).render("index");
  } else {
    res.json({ error: -2, descripcion: "ruta 'x' método 'y' no implementada" });
  }
});

//////////////////CARRITO
routerCarrito.get("/", async (req, res) => {
  try {
    const carrito = new Carrito("./carrito.txt");
    const prods = await carrito.getAll();
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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
