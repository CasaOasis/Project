import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ admin, obrero, children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;
  const allowedRoutes = ["/login"]; // Rutas permitidas sin autenticación

  if (!user && !allowedRoutes.includes(window.location.pathname)) {
    return <Navigate to="/login" />;
  }

  if ((obrero && user?.rol !== "obrero") || (admin && user?.rol !== "admin")) {
    // Si se espera un rol específico pero el usuario no tiene ese rol, redirigir
    return (
      <Navigate to={user?.rol === "admin" ? "/dashboardadmin" : "/dashboard"} />
    );
  }
  


  // Si pasa todas las verificaciones, permite el acceso al children
  return <>{children}</>;
}
