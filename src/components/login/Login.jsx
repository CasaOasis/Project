import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import "./login.css";
import LoadingScreen from "../animations/LoadingScreen";
import { Await, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Alert from "../Alert";
import { getRol } from "../context/authContext";

function Login() {
  //Loading Screen
  const [loading, setLoading] = useState(true); //set loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0); //Time
  }, []);

  //Login
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  try {
    const userCredential = await login(user.email, user.password);
    const userData = userCredential.user;
    if (userData) {
      // Obtener el rol del usuario recién autenticado
      const rol = await getRol(userData.uid);

      // Redirigir según el rol
      if (rol === "admin") {
        // Redirigir a la ruta de administrador
        navigate(`/dashboardadmin`);
      } else if (rol === "obrero") {
        // Redirigir a la ruta de obrero
        navigate(`/dashboard`);
      } else {
        // Otro manejo de roles si es necesario
        console.log("Rol desconocido");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    // Verificar el tipo de error para mostrar un mensaje específico
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/user-not-found"
    ) {
      setLoginError(
        "Credenciales incorrectas. Verifica tu correo y contraseña."
      );
    } else {
      setLoginError(
        "Parece que, tu correo o contraseña son incorrectas"
      );
    }
  }
};

const handleResetpassword = async () => {
  if (!user.email) return setError("Por favor ingresa tu email");
  try {
    await resetPassword(user.email);
    setError('El equipo de iglesia osasis te ha enviado un correo')
  } catch (error) {
    setError(error.message)
  }
}
  return (
    <div className="containerr">
      {loading ? ( //funtion loading
        <LoadingScreen />
      ) : (
        <div className="login templete d-flex justify-content-center align-items-center 100-w vh-100">
          <div className="p-3 50-w rounded bg-white">
            <form onSubmit={handleSubmit}>
              {/* Alert */}
              <div className="alert">
                {error && <Alert message={error} />}
                {loginError && <Alert message={loginError} />}
              </div>

              {/* Logo */}
              <div className="text-center">
                <img
                  className="imageCenter mb-4"
                  src={logo}
                  alt="ImageLogo"
                  width="400px"
                />
              </div>

              {/* Seccion email */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Email">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>

              {/* Seccion password */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Password">Contraseña</label>
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              {/* Button submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="buttomSubmit btn btn-dark btn-lg mb-4 "
                >
                  Ingresar
                </button>
              </div>
              {/* Fotgot password */}
              <div className="forgot-password text-center">
                <i>¿No te recuerdas de tu contraseña? </i>
                <a href="#!" onClick={handleResetpassword}>
                  Presiona aqui
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
