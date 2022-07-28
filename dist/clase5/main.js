const fs = require("fs");

/*              1er desafio             */
/* let obj = {};

const agregar = (nro) => {
  if (typeof obj[nro] === "undefined") {
    obj[nro] = 1;
  } else {
    obj[nro] += 1;
  }
};

for (let i = 0; i < 1000; i++) {
  const nro = Math.ceil(Math.random() * 20);
  agregar(nro);
}

console.log(obj); */

/*              2do desafio             */

//importo la clase
const Productos = require("./Productos");
//invoco la clase en prods
const prods = new Productos();

console.log(prods.getArray());
//obtengo el precio total de los productos
console.log(
  prods
    .getArray()
    .reduce((count, producto) => (count += producto.precio), 0)
    .toFixed(2) //el número de digitos que aparecen después del punto decimal
);
//obtengo el nombre de todos los productos
////1era forma
console.log(
  prods
    .getArray()
    .map((producto) => producto.nombre)
    .join(", ")
); //map: me devuelve un nuevo array
////2da forma
const prodsName = [];
prods.getArray().forEach((producto) => prodsName.push(producto.nombre));
console.log(prodsName.join(", "));

// alt+shift+up/down -> copia y pega la linea seleccionada arriba/abajo.
