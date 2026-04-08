// IMPORTANTE: debe tener exactamente 4 parámetros (err, req, res, next)
function errorHandler(err, req, res, next) {
 console.error('[ERROR]', err.message);
 const status = err.status || 500;
 const mensaje = err.message || 'Error interno del servidor';
 res.status(status).json({
 error: mensaje,
 codigo: status
 });
}
module.exports = errorHandler;
