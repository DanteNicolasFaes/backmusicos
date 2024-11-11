// /config/firebaseConfig.js
import admin from 'firebase-admin';
import fs from 'fs';

// Leer el archivo de credenciales de Firebase
const serviceAccount = JSON.parse(fs.readFileSync('./config/firebaseCredentials.json', 'utf8'));

// Inicializar Firebase Admin SDK con las credenciales
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;
