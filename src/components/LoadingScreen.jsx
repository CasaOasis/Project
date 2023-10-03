import React from 'react'
import logo from "../assets/logo.jpg";
import "./login/login.css";
import Lottie from "lottie-react";
import loadingbar from "../assets/animations/loadingbar.json";

function LoadingScreen() {
  return (
    <div className="loader templete d-flex justify-content-center align-items-center 100-w vh-100">
      <div className=" 0-w rounded bg-white">
      <img className="loaderScreenimg" src={logo} alt="" />,
      <Lottie className='lottiebar' animationData={loadingbar} />
      </div>
    </div>
  );
}

export default LoadingScreen