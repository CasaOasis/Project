import React from 'react'
import logo from "../../../../assets/logo.jpg";
import "./dbuHome.scss"

function DbuHome() {
  return (
    <div className='container'>
      <div className="logo">
      <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default DbuHome