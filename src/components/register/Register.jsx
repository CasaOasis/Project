import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import LoadingScreen from "../animations/LoadingScreen";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Register() {
  // Loading Screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Tiempo de carga
  }, []);

  // Register logic
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    rol: "",
  });

  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password, user.username, user.rol);
      navigate(`/dashboard${user.rol === "admin" ? "admin" : ""}`);
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      }
    }
  };
  return (
    <div className="containerr">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="login templete d-flex justify-content-center align-items-center 100-w vh-100">
          {/* Logo */}
          <div className="p-3 50-w rounded bg-white">
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <img
                  className="imageCenter mb-4"
                  src={logo}
                  alt="ImageLogo"
                  width="400px"
                />
              </div>

              <div className="error">{error && <p>{error}</p>}</div>
              {/* User name */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Name">Nombre</label>
                <input
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Nombre"
                  onChange={handleChange}
                />
              </div>
              {/* Email */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Email">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Password">Contraseña</label>
                <input
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>

              {/* Role */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="UserRole">Rol</label>
                <select
                  className="form-control"
                  id="rol"
                  name="rol"
                  onChange={handleChange}
                >
                  <option>Selecciona un rol</option>
                  <option value="admin">Admin</option>
                  <option value="obrero">Obrero</option>
                </select>
              </div>

              {/* Button submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="buttomSubmit btn btn-dark btn-lg mb-4"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;
