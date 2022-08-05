const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server running in PORT: ${server.address().port}`);
});
app.get("/api/usuarios", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "Juan",
    },
    { id: 2, nombre: "Nahuel" },
  ]);
});
