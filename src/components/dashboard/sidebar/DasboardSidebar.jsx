import React from 'react'
import { Link } from "react-router-dom";
import './Sidebar.scss'

const DasboardSidebar = () => {
  return (
    <>
      {/* Crear el sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            {/* Crear los links */}
            <Link to="/">Miembros</Link>
          </li>
          <li>
            <Link to="">Registro</Link>
          </li>
          <li>
            <Link to="">Programas</Link>
          </li>
          <li>
            <Link to="">Staff</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DasboardSidebar