const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw new Error("La base tiene que ser un numero");
    return true;
  }).argv;
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

crearArchivo(argv.base, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, " creado"))
  .catch((err) => console.log(err));
