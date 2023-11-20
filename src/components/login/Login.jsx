import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import "./login.css";
import LoadingScreen from "../animations/LoadingScreen";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Login() {
  //Loading Screen
  const [loading, setLoading] = useState(true); //set loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); //Time
  }, []);

  //Login
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { login } = useAuth();
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
      navigate(`/dashboard${userData.rol === 'admin' ? 'admin' : ''}`);
    }
  } catch (error) {
    console.error("Error:", error);
    if (error.code) {
      console.log("Código de error:", error.code);
    } else {
      console.log("No se pudo obtener el código de error.");
    }
  }
};
  return (
    <div className="containerr">
      {loading ? ( //funtion loading
        <LoadingScreen />
      ) : (
        <div className="login templete d-flex justify-content-center align-items-center 100-w vh-100">
          <div className="p-3 50-w rounded bg-white">
            <form onSubmit={handleSubmit}>
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
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
