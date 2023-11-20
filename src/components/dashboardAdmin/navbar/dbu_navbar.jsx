import React from "react";
import "./dbu_navbar.scss";
import logo from "../../../assets/logo.jpg";
import * as FaIcons from "react-icons/fa";

function Dbu_navbar() {
  return (
    <div>
      <div className="navbarr">
        <div className="label"></div>
        <div className="right">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-menu">
            {/* Agrega un ícono de menú que activará el sidebar */}
            <FaIcons.FaBars className="menu-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dbu_navbar;
