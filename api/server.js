const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
const port = process.env.PORT || 3080;

const routerProductos = require("./routes/productos.routes");
const routerCarrito = require("./routes/carrito.routes");

dotenv.config();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/build")));

const users = [{}];

app.use("/api/carrito", routerCarrito);
app.use("/api/productos", routerProductos);

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
