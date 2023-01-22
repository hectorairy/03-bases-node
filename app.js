const { crearArchivo } = require("./helpers/multiplicar");
console.clear();
// const base = 10;

// Puedes recibir datos que te envian por consola
// pero esta forma de obtener los datos
// ! no es recomendable
const [, , arg3 = "base=5"] = process.argv;
const [, base = 5] = arg3.split("=");

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, " creado"))
  .catch((err) => console.log(err));
