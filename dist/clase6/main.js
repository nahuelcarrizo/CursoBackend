const express = require("express");
const Producto = require("./Producto");
const { Router } = express;

const app = express();
const PORT = 8080;
const routerProductos = Router();
const routerProductosRandom = Router();
const productos = new Producto("./productos.txt");

//configuro las peticiones para productos
app.get("/", (req, res) =>
  res.send(`<h1 style="color:blue;">Bienvenidos al servidor express</h1>`)
);

routerProductos.get("/", async (req, res) => {
  const mostrarProductos = await productos.getAll();
  res.send(mostrarProductos);
});
/* routerProductos.post('/', ()=>{}) */

app.use("/productos/", routerProductos);

app.get("/productoRandom", async (req, res) => {
  const producto = await productos.getById(Math.ceil(Math.random() * 3));
  res.send(producto);
});

//configuro el puerto al que escucha el servidor
const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
//manejo de errores
server.on("error", (err) => console.log(err));
