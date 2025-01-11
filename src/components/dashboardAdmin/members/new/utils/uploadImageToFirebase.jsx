import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../../firebase";

// Función para subir la imagen recortada a Firebase
export const uploadImageToFirebase = async (croppedDataUrl, memberId) => {
  try {
    const storage = getStorage();
    const storageRef = ref(storage);

    // Generar un nombre de archivo único basado en el ID del miembro
    const fileName = `${memberId}.jpg`;
    const fileRef = ref(storageRef, `members/picture/${fileName}`);

    // Convertir la URL de la imagen recortada a un blob
    const blob = await fetch(croppedDataUrl).then((r) => r.blob());

    // Subir el archivo
    await uploadBytes(fileRef, blob);

    // Obtener la URL de descarga del archivo subido
    const downloadURL = await getDownloadURL(fileRef);

    // Actualizar el miembro con la URL de la foto
    await updateDoc(doc(firestore, "members", memberId), {
      photoURL: downloadURL,
    });

    return downloadURL; // Retornar la URL de descarga de la imagen
  } catch (error) {
    console.error("Error al subir la imagen a Firebase:", error);
    throw error; // Lanza el error para ser manejado en el componente
  }
};