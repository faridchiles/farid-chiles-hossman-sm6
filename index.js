

const express = require('express');
const app = express();
const verificarApiKey = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const usuariosRouter = require('./routes/usuarios');
// 1. Middleware global: parsear JSON
app.use(express.json());
// 2. Rutas protegidas con autenticación
app.use('/usuarios', verificarApiKey, usuariosRouter);
// 3. Ruta raíz de comprobación
app.get('/', (req, res) => {
 res.json({ mensaje: 'API funcionando correctamente' });
});
// 4. Middleware de errores (SIEMPRE al final)
app.use(errorHandler);
const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
