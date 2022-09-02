/* import express from "express";

const app = express();
const port = 5500;
app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
}); */
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
        this.countMascotas();
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(libro) {
        this.libros.push(libro);
    }
    getBookNames() {
        return this.libros.map(() => `${this.libros}`);
    }
}
const usuario1 = new Usuario("Nahuel", "Carrizo", [], []);
usuario1.addMascota("Hermes");
usuario1.addBook([
    "nombre: 100 años de soledad",
    "autor: Gabriel Gárcia Márquez",
]);
/* console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
console.log(usuario1.getFullName()); */
console.log(usuario1.getBookNames());
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
//# sourceMappingURL=clase2.js.map