const express = require("express");
const { Router } = express;
const Producto = require("../Producto");
const app = express();
const PORT = 4000 || process.env.PORT;
const routerProductos = Router();
const productos = new Producto("../productos.txt");

const handlebars = require("express-handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/public"));
app.use("/api/productos", routerProductos);

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

app.set("view engine", "hbs");
app.set("views", "./views");

routerProductos.get("/", (req, res) => {
  res.render("main");
});

routerProductos.get("/listaproductos/", async (req, res) => {
  const prods = await productos.getAll();
  res.render("productos", { prods: prods });
});

routerProductos.post("/", async (req, res) => {
  productos.save(req.body);
  res.status(200).render("main");
});

app.listen(PORT, (err) => {
  if (err) throw new Error(`Error on server: ${err}`);
  console.log(`Server running on port ${PORT}`);
});
