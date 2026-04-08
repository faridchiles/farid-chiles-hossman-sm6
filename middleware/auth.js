// En producción, usar variables de entorno (.env)
const API_KEY = 'mi-clave-secreta-2024';
function verificarApiKey(req, res, next) {
 const key = req.headers['x-api-key'];
 if (!key || key !== API_KEY) {
 return res.status(401).json({
 error: 'No autorizado. Incluye el header x-api-key.',
 codigo: 401
 });
 }
 next(); // Credencial correcta, continuar
}
module.exports = verificarApiKey;
