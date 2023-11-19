import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {

  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const signup = (email, password, username) => createUserWithEmailAndPassword(auth, email,password).then(() => {
    updateProfile(auth.currentUser,{
      displayName: username,
    })
  });

  const login = async (email,password) => signInWithEmailAndPassword(auth, email,password);

  const logout = () => signOut(auth)

  useEffect (() => {
    console.log('auth provider loaded')
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log(currentUser)
      setLoading(false)
    });

    return () => unsubscribe();
  },[])


  return <authContext.Provider value={{ signup, login, user, logout, loading }}>{children}</authContext.Provider>;
}
