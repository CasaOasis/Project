import React from "react";
import logo from "../../assets/logo.jpg";
import "./login.css";

function Login() {
  return (
    <div className="login templete d-flex justify-content-center align-items-center 100-w vh-100">
      <div className="p-3 50-w rounded bg-white">
        <h1>Hola</h1>
        <form>
          <div className="text-center">
            <img className="imageCenter mb-4" src={logo} alt="" width="400px" />
          </div>
          <div class="form-group mb-4 input-group-lg">
            <label for="exampleInputEmail1">Correo</label>
            <input
              type="email"
              class="form-control"
              id="Email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <div class="form-group mb-5 input-group-lg">
            <label for="exampleInputPassword1">Contraseña</label>
            <input
              class="form-control" //Cambiar color
              id="Password"
              placeholder="Password"
            ></input>
          </div>
          <div className="text-center">
            <button type="submit" class="btn btn-dark btn-lg mb-4 ">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
