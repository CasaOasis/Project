import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.jpg";
import LoadingScreen from "../LoadingScreen";

function Register() {
  // Loading Screen
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Tiempo de carga
  }, []);

  return (
    <div className="containerr">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="login templete d-flex justify-content-center align-items-center 100-w vh-100">
          <div className="p-3 50-w rounded bg-white">
            <form>
              <div className="text-center">
                <img
                  className="imageCenter mb-4"
                  src={logo}
                  alt="ImageLogo"
                  width="400px"
                />
              </div>

              {/* User name */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Name">Nombre</label>
                <input
                  className="form-control"
                  id="Name"
                  placeholder="Nombre"
                />
              </div>

              {/* Email */}
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

              {/* Password */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="Password">Contraseña</label>
                <input
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                />
              </div>

              {/* Role */}
              <div className="form-group mb-4 input-group-lg">
                <label htmlFor="UserRole">Rol</label>
                <select className="form-control" id="UserRole">
                  <option value="admin">Admin</option>
                  <option value="obrero">Obrero</option>
                </select>
              </div>

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
