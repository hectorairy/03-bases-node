const fs = require("fs");

const crearArchivo = (base = 5, listar) => {
  return new Promise((resolve, reject) => {
    let tabla = "";

    for (let i = 1; i <= 10; i++) {
      tabla += `${base} X ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("================");
      console.log("  Tabla del ", base);
      console.log("================");
      console.log(tabla);
    }

    // fs.writeFile(`tabla-${base}.txt`, tabla, (err) => {
    //   if (err) throw err;
    //   console.log("archivo creado!");
    // });
    const name = `tabla-${base}.txt`;
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
