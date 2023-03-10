const fs = require("fs");

require("colors");

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    let tabla = "";
    let tablaColor = "";

    for (let i = 1; i <= hasta; i++) {
      tabla += `${base} X ${i} = ${base * i}\n`;
      tablaColor += base + " X ".red + i + " = ".blue + `${base * i}\n`.cyan;
    }

    if (listar) {
      console.log("================".rainbow);
      console.log(`  Tabla del ${base}   `.bgBrightWhite.black);
      console.log("================".rainbow);
      console.log(tablaColor);
    }

    // fs.writeFile(`tabla-${base}.txt`, tabla, (err) => {
    //   if (err) throw err;
    //   console.log("archivo creado!");
    // });
    const name = `./outputs/tabla-${base}.txt`;
    try {
      fs.writeFileSync(name, tabla);
      resolve(name);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  crearArchivo,
};
