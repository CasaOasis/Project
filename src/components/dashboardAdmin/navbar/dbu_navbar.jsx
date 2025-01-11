import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./dbu_navbar.scss";
import logo from "../../../assets/logo.jpg";
import * as FaIcons from "react-icons/fa";

function Dbu_navbar() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const routeToTitleMap = {
      "/dashboardadmin": "Dashboard",
      "/dashboardadmin/miembros": "Miembros",
      "/dashboardadmin/registro": "Registro",
      "/dashboardadmin/programa": "Programa",
      "/dashboardadmin/register": "Register",
      // Agrega más rutas y títulos según tu aplicación
    };

    const currentRoute = location.pathname;
    const title = routeToTitleMap[currentRoute];


    setPageTitle(title ? `Mi Sitio - ${title}` : "Oasis");
  }, [location.pathname]);


  return (
    <div>
      <div className="navbarr">
        <div className="label"></div>
        <div className="center">
          <h1>{pageTitle.replace("Mi Sitio - ", "")}</h1>
        </div>
        <div className="right">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-menu">
            {/* Agrega un ícono de menú que activará el sidebar */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dbu_navbar;
