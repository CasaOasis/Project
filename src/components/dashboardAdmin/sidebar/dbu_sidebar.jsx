import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./dbu_sidebar.scss";
import * as FaIcons from "react-icons/fa";

import { useAuth } from "../../context/authContext";
import icon1x1 from "../../../assets/icon1x1.jpg";
import { FaHammer, FaUserShield } from "react-icons/fa";
import { useEffect } from "react";
import { Collapse } from "bootstrap";
import Lottie from "lottie-react";
import noverified from "../../../assets/animations/noverified.json";
import verified from "../../../assets/animations/verified.json";

//activeClassName active se activa cuando se le da click

function Dbu_sidebar() {
  
  const { user, logout, loading, uploadProfilePicture } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);

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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile && user) {
      uploadProfilePicture(selectedFile, user.uid); // Llama a la función de subida de foto de perfil del contexto de autenticación
    } else {
      console.log(
        "No se ha seleccionado ningún archivo o no hay usuario autenticado."
      );
    }
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
                    <div>
                      <h2>Subir foto de perfil</h2>
                      <input type="file" onChange={handleFileChange} />
                      <button onClick={handleUpload}>Subir</button>
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
              {/* EmailVerified */}
              {user && user.emailVerified ? (
                <div className="d-flex ">
                  <p className="text">
                    <FaIcons.FaFingerprint />
                    <i> Correo verificado</i>
                  </p>
                  <Lottie
                    className="mx-auto d-block"
                    animationData={verified}
                    loop={false}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              ) : (
                <div className="d-flex ">
                  <p className="text">
                    <FaIcons.FaFingerprint />
                    <i> Correo no verificado</i>
                  </p>
                  <Lottie
                    className="mx-auto d-block"
                    animationData={noverified}
                    loop={false}
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              )}
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
              <FaIcons.FaUsersCog /> Registro de Miembros
            </NavLink>
          </li>
          <li>
            <NavLink
              to="programa"
              className="w-100 d-inline-block px-1" //Clases de bootstrap
              activeclassname="active" //activeClassName active se activa cuando se le da click
            >
              <FaIcons.FaRegClipboard /> Programa del Servicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="register"
              className="w-100 d-inline-block px-1" //Clases de bootstrap
              activeclassname="active" //activeClassName active se activa cuando se le da click
            >
              <FaIcons.FaUserPlus /> Registro de usuarios
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dbu_sidebar;
