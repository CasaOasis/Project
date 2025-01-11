// firebase.jsx
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi8q8voQ98_zh7-yIRyATCbeWpzeVVNgo",
  authDomain: "casaoasisgtm-9b609.firebaseapp.com",
  projectId: "casaoasisgtm-9b609",
  storageBucket: "casaoasisgtm-9b609.appspot.com",
  messagingSenderId: "464322103646",
  appId: "1:464322103646:web:01575f86c29666cc63a7cf",
  measurementId: "G-K5P4NTHY79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// Función para subir la imagen a Firebase Storage
export const uploadImageToFirebase = async (base64Image, memberId) => {
  try {
    // Crear una referencia para almacenar la imagen
    const imageRef = ref(storage, `images/${memberId}.jpg`);

    // Asegurarse de que el base64 tiene el prefijo correcto de MIME
    if (!base64Image.startsWith("data:image/jpeg")) {
      const mimeType = "data:image/jpeg;base64,";
      base64Image = mimeType + base64Image.split(",")[1]; // Asegura que esté en formato correcto
    }

    // Subir la imagen en formato base64
    await uploadString(imageRef, base64Image, 'data_url');

    // Obtener la URL de descarga de la imagen
    const downloadURL = await getDownloadURL(imageRef);

    return downloadURL; // Retornar la URL de la imagen
  } catch (error) {
    console.error("Error al subir la imagen a Firebase:", error);
    throw error;
  }
};