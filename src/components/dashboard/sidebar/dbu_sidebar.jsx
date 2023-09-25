import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";
import "./dbu_sidebar.scss";
import * as FaIcons from "react-icons/fa";

//activeClassName active se activa cuando se le da click

function Dbu_sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/dashboard/miembros"
            className="w-100 d-inline-block px-1" //Clases de bootstrap
            activeClassName="active" //activeClassName active se activa cuando se le da click
          >
            <FaIcons.FaUsers /> Miembros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="registro"
            className="w-100 d-inline-block px-1" //Clases de bootstrap
            activeClassName="active" //activeClassName active se activa cuando se le da click
          >
            <FaIcons.FaUserPlus /> Registro
          </NavLink>
        </li>
        <li>
          <NavLink
            to="programa"
            className="w-100 d-inline-block px-1" //Clases de bootstrap
            activeClassName="active" //activeClassName active se activa cuando se le da click
          >
            <FaIcons.FaRegClipboard /> Programa
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Dbu_sidebar;
