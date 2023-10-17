import React from 'react'
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import error from "../../assets/animations/error.json";
import './error.scss'
import Navbar from '../home/components/navbar';
import Footer from '../home/components/footer';

function Error() {
  return (
    <>
      <div className="error-container justify-content-center align-items-center 100-w">
        <Lottie className="error" animationData={error} />
        <div className="error-message">
          <p>¡Ohoh! </p> Página no encontrada
        </div>
        <NavLink
          to="/"
          className="back-home justify-content-center align-items-center"
        >
          <p>Volver a la página de inicio</p>
        </NavLink>
      </div>
    </>
  );
}

export default Error