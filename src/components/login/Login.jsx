import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import "./login.css";
import LoadingScreen from "../animations/LoadingScreen";

function Login() {
  //Loading Screen
  const [loading, setLoading] = useState(false); //set loading
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); //Time
  }, []);
  return (
    <div className="containerr">
      {loading ? ( //funtion loading
        <LoadingScreen />
      ) : (
        <div className="login templete d-flex justify-content-center align-items-center 100-w vh-100">
          <div className="p-3 50-w rounded bg-white">
            <form>
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
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              {/* Seccion password */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Password">Contraseña</label>
                <input
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                />
              </div>

              {/* Button submit */}
              <div className="text-center">
                <button
                  type="submit"
                  class="buttomSubmit btn btn-dark btn-lg mb-4 "
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
