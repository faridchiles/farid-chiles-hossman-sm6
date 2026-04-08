const fs = require('fs');
const path = require('path');
// Ruta absoluta al archivo de datos
const RUTA = path.join(__dirname, '../data/usuarios.json');
// Lee el archivo y retorna el arreglo de usuarios
function leerUsuarios() {
 const contenido = fs.readFileSync(RUTA, 'utf-8');
 return JSON.parse(contenido);
}
// Sobreescribe el archivo con el arreglo actualizado
function guardarUsuarios(usuarios) {
 fs.writeFileSync(RUTA, JSON.stringify(usuarios, null, 2));
}
module.exports = { leerUsuarios, guardarUsuarios };
