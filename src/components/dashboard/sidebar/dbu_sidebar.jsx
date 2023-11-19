import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./dbu_sidebar.scss";
import * as FaIcons from "react-icons/fa";
import { useAuth } from "../../context/authContext";

//activeClassName active se activa cuando se le da click

function Dbu_sidebar() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLout = async () => {
    await logout();
  };

  if (loading) return <p>loading</p> 

  return (
    <div className="sidebar">
      <ul>
        <li>
          <ul>
            <li>
              <p>Welcome {user && user.displayName}</p>
            </li>
            <li>
              <p>{user && user.email}</p>
            </li>
            <button type="button" className="btn btn-dark" onClick={handleLout}>
              Logout
            </button>
          </ul>
        </li>
        <li>
          <NavLink
            to="miembros"
            className="w-100 d-inline-block px-1" //Clases de bootstrap
            activeclassname="active" //activeClassName active se activa cuando se le da click
          >
            <FaIcons.FaUsers /> Miembros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="registro"
            className="w-100 d-inline-block px-1" //Clases de bootstrap
            activeclassname="active" //activeClassName active se activa cuando se le da click
          >
            <FaIcons.FaUserPlus /> Registro
          </NavLink>
        </li>
        <li>
          <NavLink
            to="programa"
            className="w-100 d-inline-block px-1" //Clases de bootstrap
            activeclassname="active" //activeClassName active se activa cuando se le da click
          >
            <FaIcons.FaRegClipboard /> Programa
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Dbu_sidebar;
