import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="credo">Credo</NavLink>
        </li>
        <li>
          <NavLink to="about">¿Quienes somos?</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar