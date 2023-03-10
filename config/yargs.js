const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Indica hasta que numero se genera la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) throw new Error("La base tiene que ser un numero");
    if (isNaN(argv.h))
      throw new Error("El limite de la tabla tiene que ser un numero");
    return true;
  }).argv;

module.exports = argv;
