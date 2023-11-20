import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ admin, obrero, children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  if (!user) return <Navigate to="/login"/>;
  
  if (obrero && user.rol !== "obrero") {
    // Si se espera un rol de obrero pero el usuario no es obrero
    return <Navigate to="/dashboardadmin" />;
}

if (admin && user.rol !== "admin") {
    // Si se espera un rol de administrador pero el usuario no es administrador
    return <Navigate to="/dashboard" />;
}

  


  // Si pasa todas las verificaciones, permite el acceso al children
  return <>{children}</>;
}
