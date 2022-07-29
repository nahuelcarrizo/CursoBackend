const express = require("express");
const Producto = require("./Producto");

const app = express();
const PORT = 8080;
const productos = new Producto("./productos.txt");

//configuro las peticiones
app.get("/", (req, res) =>
  res.send(`<h1 style="color:blue;">Bienvenidos al servidor express</h1>`)
);

app.get("/productos", async (req, res) => {
  const mostrarProductos = await productos.getAll();
  res.send(mostrarProductos);
});

app.get("/productoRandom", async (req, res) => {
  const productosAll = await productos.getAll();
  const pickRandom = () => {
    const nro = Math.ceil(Math.random() * 3);
    const productoElegido = productosAll.filter((el) => el.id == nro);
    return productoElegido;
  };
  res.send(pickRandom());
});

//configuro el puerto al que escucha el servidor
const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
//manejo de errores
server.on("error", (err) => console.log(err));
