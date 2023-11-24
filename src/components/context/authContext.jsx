import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth, firestore, storage } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject, getMetadata } from "firebase/storage";

export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

//This function get rol to user
export async function getRol(uid) {
  const docRef = doc(firestore, `users/${uid}`);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return docSnapshot.data().rol;
  } else {
    throw new Error("No se encontró el documento del usuario");
  }
}

export async function getPhotoURL(userId) {
  try {
    const storageRef = ref(
      storage,
      `/users/profilePictures/${userId}/profileImage`
    );

    const metadata = await getMetadata(storageRef);
    if (metadata) {
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL; // Retorna la URL en caso de éxito
    } else {
      console.log("La imagen de perfil no existe.");
      return null; // Retorna un valor por defecto si la imagen no existe
    }
  } catch (error) {
    console.error("Error al obtener la imagen de perfil:", error);
    return null; // Retorna un valor por defecto si hay un error
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);

  //Create user with verification
  const signup = async (email, password, username, rol) => {
    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //the function to send emain verification
      sendEmailVerification(auth.currentUser).then(() => {
        console.log("Se ha enviado un correo de verificaion");
      });
      //set username, email and rol to the DB
      const docuRef = doc(firestore, `users/${userInfo.user.uid}`);
      await setDoc(docuRef, { name: username, email: email, rol: rol });
      await updateProfile(auth.currentUser, { displayName: username });
      return userInfo;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        // Manejo específico para correo electrónico ya en uso
        // Por ejemplo, mostrar un mensaje al usuario o redirigir a una pantalla de inicio de sesión
        console.log("El correo electrónico ya está en uso.");
      } else {
        console.error(error);
        throw error;
      }
    }
  };

  //login
  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const uploadProfilePicture = async (file, userId) => {
  try {
    // Referencia al storage de Firebase usando el id del usuario
    const storageRef = ref(
      storage,
      `/users/profilePictures/${userId}/profileImage`
    );

    const snapshot = await uploadBytes(storageRef, file);
    console.log("Foto de perfil subida a Firebase:", snapshot);

    // Obtener la URL de descarga de la imagen subida
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL; // Retorna la URL de descarga para almacenarla en la base de datos del usuario
  } catch (error) {
    console.error("Error al subir la foto de perfil a Firebase:", error);
    throw error;
  }
};


  const deleteProfilePicture = async (userId) => {
    try {
      const storageRef = ref(
        storage,
        `/users/profilePictures/${userId}/profileImage`
      );

      await deleteObject(storageRef);
      console.log("Foto de perfil eliminada de Firebase");

      // Manejar la actualización de la URL de la foto de perfil en la base de datos del usuario (si es necesario)
      // Código para actualizar la URL en tu base de datos
    } catch (error) {
      console.error("Error al eliminar la foto de perfil de Firebase:", error);
      throw error;
    }
  };

  //Logout session
  const logout = () => signOut(auth);

  //ResetPassword
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          await currentUser.reload();

          //Mostrar los datos del usuario
          const rol = await getRol(currentUser.uid);
          const photoURL = await getPhotoURL(currentUser.uid);
          const userData = {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            rol: rol,
            emailVerified: currentUser.emailVerified,
            photoURL: currentUser.photoURL,
          };
          setUser(userData);
          console.log(userData.rol);
          setProfileImage(photoURL); // Establece la URL de la imagen
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      } else {
        // Manejo cuando el usuario no está autenticado
        setUser(null);
        setProfileImage(null); // Establece la URL de la imagen a null o algún valor por defecto
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        resetPassword,
        profileImage,
        deleteProfilePicture,
        uploadProfilePicture,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
