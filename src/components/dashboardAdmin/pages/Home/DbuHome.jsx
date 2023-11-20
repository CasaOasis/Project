import React from 'react'
import logo from "../../../../assets/logo.jpg";
import "./dbuHome.scss"

function DbuHomeAdmin() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" className="img-fluid" />
      </div>
    </div>
  );
}

export default DbuHomeAdmin