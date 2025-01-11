import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dbu_sidebarr.scss";
import * as FaIcons from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { useAuth } from "../../context/authContext";
import icon1x1 from "../../../assets/icon1x1.jpg";
import { FaHammer, FaUserShield } from "react-icons/fa";
import { Collapse } from "bootstrap";
import Lottie from "lottie-react";
import noverified from "../../../assets/animations/noverified.json";
import verified from "../../../assets/animations/verified.json";

function Dbu_sidebar() {
  const { user, logout, loading, uploadProfilePicture, profileImage, deleteProfilePicture } = useAuth();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMenuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú de cambio de foto

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleMenu = () => setMenuVisible(!isMenuVisible); // Alternar la visibilidad del menú

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile && user) {
      uploadProfilePicture(selectedFile, user.uid)
        .then(() => {
          window.location.reload(); // Recargar después de subir la imagen
        })
        .catch((error) => {
          console.error("Error al subir la imagen:", error);
        });
    } else {
      console.log("No se ha seleccionado ningún archivo o no hay usuario autenticado.");
    }
  };

  const handleDeletePhoto = async () => {
    try {
      if (user) {
        await deleteProfilePicture(user.uid);
        window.location.reload(); // Recargar después de eliminar la foto de perfil
      }
    } catch (error) {
      console.error("Error al eliminar la foto de perfil:", error);
    }
  };

  const handleLogout = async () => {
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
    <div className={`sidebar-container ${isSidebarOpen ? "open" : "closed"}`}>
      {/* Botón para abrir/cerrar el sidebar */}
      <button className="menu-toggle-btn btn btn-dark" onClick={toggleSidebar}>
        <FaIcons.FaBars />
      </button>

      <div className="sidebar">
        {/* UserProfile */}
        <div className="user-profile">
          
          <div className="card card-view text-white">
            {/* UserPhoto */}
            <div className="box position-relative">
              <div className="user-photo mt-5 position-relative">
                <div>
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="rounded-circle position-absolute top-0 start-50 translate-middle"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <img
                      src={icon1x1}
                      alt="Default"
                      className="rounded-circle position-absolute top-0 start-50 translate-middle"
                    />
                    
                  )}
                </div>
                 {/* Toggle Menu Button */}
            <button className="btn update-profile" onClick={toggleMenu}>
            <FaCamera />  
                        </button>
              </div>
            </div>
           
            
            {/* Menú de cambiar foto */}
            {isMenuVisible && (
              <div className="profile-menu mt-3">
                <div className="mb-3">
                  <h4>Subir Foto de Perfil</h4>
                  <input type="file" onChange={handleFileChange} />
                  <button className="btn btn-primary mt-2" onClick={handleUpload}>
                    Subir
                  </button>
                </div>
                <div>
                  <button className="btn btn-danger" onClick={handleDeletePhoto}>
                    Eliminar Foto de Perfil
                  </button>
                </div>
              </div>
            )}
            
            {/* UserInfo */}
            <div className="userInfo custom-bg-dark p-3">
              <h2 className="fs-5 pb-3 saludo">
                <FaIcons.FaUser /> <i className="fw-bolder">¡Hola!</i> {user && user.displayName}
              </h2>
              <div className="userInfo-sub ms-4">
                <div>
                  <div className="rol">
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
                  <div className="d-flex">
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
                  <div className="d-flex">
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
                onClick={handleLogout}
              >
                <FaIcons.FaArrowCircleLeft /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="menu">
          <ul>
            <li>
              <NavLink to="miembros" className="w-100 d-inline-block px-1">
                <FaIcons.FaUsers /> Miembros
              </NavLink>
            </li>
            <li>
              <NavLink to="registro" className="w-100 d-inline-block px-1">
                <FaIcons.FaUsersCog /> Registro de Miembros
              </NavLink>
            </li>
            <li>
              <NavLink to="programa" className="w-100 d-inline-block px-1">
                <FaIcons.FaRegClipboard /> Programa del Servicio
              </NavLink>
            </li>
            <li>
              <NavLink to="register" className="w-100 d-inline-block px-1">
                <FaIcons.FaUserPlus /> Registro de usuarios
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dbu_sidebar;