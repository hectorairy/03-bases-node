const fs = require("fs");

console.clear();
console.log("================");
console.log("  Tabla del 5  ");
console.log("================");

const base = 5;
let tabla = "";

for (let i = 1; i <= 10; i++) {
  tabla += `${base} X ${i} = ${base * i}\n`;
}

console.log(tabla);

fs.writeFile(`tabla-${base}.txt`, tabla, (err) => {
  if (err) throw err;
  console.log("archivo creado!");
});
