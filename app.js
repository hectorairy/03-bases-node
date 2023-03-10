const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require("colors");

console.clear();
// const base = 10;

// Puedes recibir datos que te envian por consola
// pero esta forma de obtener los datos
// ! no es recomendable
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// console.log(process.argv);
console.log(argv);
// console.log("base: yargs", argv.base);

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(`${nombreArchivo} creado`.bgCyan.black))
  .catch((err) => console.log(err));
