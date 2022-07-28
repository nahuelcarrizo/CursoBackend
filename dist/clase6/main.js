const express = require("express");
const moment = require("moment");
const Productos = require("./Productos");

const app = express();
const PORT = 8080;

//configuro las peticiones
app.get("/", (req, res) =>
  res.send(`<h1 style="color:blue;">Bienvenidos al servidor express</h1>`)
);

app.get("/productos", (req, res) => {
  //invoco la clase en prods
  const prods = new Productos();
  res.send(
    prods
      .getArray()
      .map((producto) => producto.nombre)
      .join(", ")
  );
});

//configuro el puerto al que escucha el servidor
const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
//manejo de errores
server.on("error", (err) => console.log(err));
