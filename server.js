// server.js
import express from 'express';
import authRoutes from './routes/authRoutes.js';  // Importa las rutas de autenticación

const app = express();

// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

