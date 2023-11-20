import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, firestore } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

async function getRol(uid) {
  const docRef = doc(firestore, `users/${uid}`);
  const docCifrate = await getDoc(docRef);
  const infoFinal = docCifrate.data().rol;
  return infoFinal;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const signup = async (email, password, username, rol) => {
    try {
      const userInfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
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



  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password);


  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const rol = await getRol(currentUser.uid);
          const userData = {
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            rol: rol,
            photoURL: currentUser.photoURL,
          };
          setUser(userData);
          console.log(currentUser.photoURL);
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      } else {
        // Manejo cuando el usuario no está autenticado
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading}}>
      {children}
    </authContext.Provider>
  );
}
