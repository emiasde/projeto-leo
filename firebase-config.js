import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// As chaves ficam isoladas aqui.
// Para segurança real, configure as "Rules" no painel do seu Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyCvb0EO4v-ZS8Gvg0Jv5sLR0R3EpJnkL9w",
    authDomain: "trabalho-leo-dda9c.firebaseapp.com",
    projectId: "trabalho-leo-dda9c",
    storageBucket: "trabalho-leo-dda9c.firebasestorage.app",
    messagingSenderId: "425504919025",
    appId: "1:425504919025:web:efbc8f9126f0a310784850"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);