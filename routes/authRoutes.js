// /routes/authRoutes.js
import express from 'express';
import admin from '../config/firebaseCredentials.json';  // Importar la configuración de Firebase
import { getAuth } from 'firebase-admin/auth';   // Importar la función getAuth

const router = express.Router();

// Crear un objeto auth desde firebase-admin
const auth = getAuth(admin);

// Ruta para registrar usuario
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Crear el usuario en Firebase
        const userRecord = await auth.createUser({
            email: email,
            password: password,
        });

        // Responder con éxito
        res.status(201).json({
            message: 'Usuario registrado correctamente',
            email: userRecord.email,
            uid: userRecord.uid,  // Puedes enviar también el UID del usuario
        });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({
            message: 'Error al registrar el usuario',
            error: error.message,
        });
    }
});

export default router;
