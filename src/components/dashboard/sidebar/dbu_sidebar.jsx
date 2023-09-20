import React from 'react'
import { Link } from "react-router-dom";
import "./dbu_sidebar.scss"

function Dbu_sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard/miembros">Miembros</Link>
        </li>
        <li>
          <Link to="registro">Registro</Link>
        </li>
        <li>
          <Link to="programa">Programa</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dbu_sidebar