const fs = require("fs");

const crearArchivo = (base = 5) => {
  return new Promise((resolve, reject) => {
    console.log("================");
    console.log("  Tabla del ", base);
    console.log("================");

    let tabla = "";

    for (let i = 1; i <= 10; i++) {
      tabla += `${base} X ${i} = ${base * i}\n`;
    }

    console.log(tabla);

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
