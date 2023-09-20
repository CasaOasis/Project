import React from 'react'
import "./dbu_navbar.scss";
import logo from "../../../assets/logo.jpg";

function Dbu_navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="label"></div>
        <div className='img'>
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Dbu_navbar