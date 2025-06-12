// En: src/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Reemplaza esto con la configuración de tu proyecto Firebase
// La podés encontrar en la consola de Firebase > Configuración del proyecto
const firebaseConfig = {
    apiKey: "AIzaSyCtuF4icxxkF9zRwTI9_hCO8wALqvgLqd4",
    authDomain: "elanyachts-13c10.firebaseapp.com",
    projectId: "elanyachts-13c10",
    storageBucket: "elanyachts-13c10.firebasestorage.app",
    messagingSenderId: "331934446256",
    appId: "1:331934446256:web:e478521f6867cf3a7e0175",
    measurementId: "G-XZFGWK03C7"
};

// Inicializamos la app de Firebase
const app = initializeApp(firebaseConfig);

// Obtenemos los servicios que vamos a usar y los exportamos
const auth = getAuth(app);
const db = getFirestore(app);

// ¡LA LÍNEA CLAVE! Exportamos las herramientas para que otros las usen.
export { auth, db };