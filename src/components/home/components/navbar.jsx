import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.jpg";
import icon1x1 from "../../../assets/icon1x1.jpg";
import "./styles.scss";
import * as FaIcons from "react-icons/fa";
import * as Gia from "react-icons/gr";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar1">
      <div className="body">
        <div className="left">
          <div className="start">
            <img src={icon1x1} alt="" />
          </div>
        </div>
        <div className="right">
          <div className={`links ${isMenuOpen ? "isActive" : ""}`}>
            <ul>
              <li>
                <NavLink to="/" className="w-100 d-inline-block px-1">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="credo" className="w-100 d-inline-block px-1">
                  Credo
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className="w-100 d-inline-block px-1">
                  ¿Quienes somos?
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="social">
            <ul>
              <li>
                <a
                  href="https://instagram.com/casaoasisgt?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                >
                  <FaIcons.FaInstagram />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaIcons.FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100094911880619&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <FaIcons.FaFacebook />
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn_menu" onClick={toggleMenu}>
            {/* Para cambiar de icono del menu a close */}
            {isMenuOpen ? <Gia.GrClose /> : <FaIcons.FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
