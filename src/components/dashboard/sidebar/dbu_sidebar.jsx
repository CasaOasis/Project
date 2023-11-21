import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./dbu_sidebar.scss";
import * as FaIcons from "react-icons/fa";
import { useAuth } from "../../context/authContext";
import icon1x1 from "../../../assets/icon1x1.jpg";
import { FaHammer, FaUserShield } from "react-icons/fa";
import { useEffect } from "react";
import { Collapse } from "bootstrap";

//activeClassName active se activa cuando se le da click

function Dbu_sidebar() {
  const { user, logout, loading } = useAuth();

  useEffect(() => {
    const externalContentCollapse = new Collapse(
      document.getElementById("navbarToggleExternalContent"),
      {
        toggle: false, // Para inicializar el colapso sin abrirlo
      }
    );

    return () => {
      externalContentCollapse.dispose(); // Limpiar el colapso cuando se desmonte el componente
    };
  }, []);

  const handlechange = async() =>{

  };

  const handleclick = async () => {

  };

  const handleLout = async () => {
    await logout();
  };

  if (loading) return <p>loading</p>;

  const renderUserRoleIcon = (user) => {
    if (user.rol === "obrero") {
      return <FaHammer />;
    } else if (user.rol === "admin") {
      return <FaUserShield />;
    } else {
      return null; // Manejar otro tipo de rol o caso sin icono
    }
  };

  return (
    <div className="sidebar">
      {/* UserProfile */}
      <div className="user-profile">
        <div className="card bg-dark text-white  ">
          {/* UserPhoto */}
          <div className="box position-relative">
            <div className="user-photo mt-5 position-relative ">
              <img
                src={icon1x1}
                alt="..."
                className="rounded-circle position-absolute top-0 start-50 translate-middle"
              ></img>
            </div>
          </div>
          {/* ExternalContent */}
          <div className="collapse p-0 m-0" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
              <h5 className="text-white h4 text-center fs-4 fw-bold">
                Ajustes
              </h5>
              <span className="text text-start">
                <div className="settings">
                  <div className="mb-3">
                    <label className="form-label">Sube tu foto de perfil</label>
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="update"
                      onChange={handlechange}
                    ></input>
                    <div className="submit-image-profile text-center pt-4">
                      <button className="btn btn-light" onClick={handleclick}>
                        Cambiar imagen
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark m-0 p-0">
            <div className="container-fluid d-flex">
              <div className="tittle ">
                <p className="m-0 fs-5">Perfil</p>
              </div>
              <button
                className="navbar-toggler p-0 m-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
          {/* UserInfo */}
          <div className="userInfo custom-bg-dark p-3">
            <h2 className="fs-5 pb-3">
              {" "}
              <FaIcons.FaUser /> <i className="fw-bolder">¡Hola!</i>{" "}
              {user && user.displayName}
            </h2>
            <div className="userInfo-sub ms-4">
              <div>
                <div className="rol ">
                  {renderUserRoleIcon(user)}
                  <i> </i>
                  {user.rol}
                </div>
              </div>
              <p>
                <FaIcons.FaAddressCard /> {user && user.email}
              </p>
            </div>
          </div>
          {/* Logout */}
          <div className="btn-logout text-end p-3">
            <button
              type="button"
              className="btn btn-light"
              onClick={handleLout}
            >
              <FaIcons.FaArrowCircleLeft /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="menu">
        <ul>
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
              <FaIcons.FaUsersCog /> Programa del Servicio
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
    </div>
  );
}

export default Dbu_sidebar;
