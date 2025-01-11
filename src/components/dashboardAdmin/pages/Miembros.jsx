import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase";
import userPlaceholder from "../../../assets/images/userPlaceholder.png";
import { IoIosAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import "../pages/styles.scss";

const MiembrosAdmin = () => {
  const [miembros, setMiembros] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "Miembros";
    fetchMiembros();
    window.addEventListener("resize", handleResize);
    handleResize(); // Verifica el tamaño de la pantalla al cargar

    return () => window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar el componente
  }, []);

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Función para obtener los datos de los miembros desde Firebase
  const fetchMiembros = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "members"));
      const miembrosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMiembros(miembrosData);
    } catch (error) {
      console.error("Error fetching members: ", error);
    }
  };

  // Función para mostrar la imagen con el fallback si no se encuentra
  const renderImage = (photoURL) => {
    const defaultImage = userPlaceholder;

    if (photoURL) {
      // Validar si la URL tiene un tipo de imagen válido
      const validTypes = ['.jpg', '.jpeg', '.png', '.gif'];
      const isValidType = validTypes.some((type) => photoURL.toLowerCase().endsWith(type));

      if (isValidType) {
        return <img src={photoURL} alt="Foto del miembro" className="card-img" />;
      }
    }

    // Si no es válida o no existe la imagen, mostramos una imagen por defecto
    return <img src={defaultImage} alt="Imagen predeterminada" className="card-img" />;
  };

  return (
    <div className="container">
      <div className="table-scroll">
        {isMobile ? (
          // Mostrar las tarjetas en dispositivos pequeños
          <div className="cards-container">
            {miembros.map((miembro, index) => (
              <div className="card" key={miembro.id}>
                <div className="card-header">
                  {renderImage(miembro.photoURL)}
                  <h3>{miembro.name} {miembro.lastname}</h3>
                </div>
                <div className="card-body">
                  <p>Edad: {miembro.age}</p>
                  <p>Phone: {miembro.number}</p>
                  <p>Email: {miembro.email}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn1">
                    <MdEdit />
                  </button>
                  <button className="btn btn2">
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Mostrar la tabla en pantallas grandes
          <div className="table">
            <table className="table head">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {miembros.map((miembro, index) => (
                  <tr key={miembro.id}>
                    <td>{index + 1}</td>
                    <td>
                      {renderImage(miembro.photoURL)}
                    </td>
                    <td>{miembro.name}</td>
                    <td>{miembro.lastname}</td>
                    <td>{miembro.age}</td>
                    <td>{miembro.number}</td>
                    <td>{miembro.email}</td>
                    <td>
                      <button className="btn btn1">
                        <MdEdit />
                      </button>
                      <button className="btn btn2">
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiembrosAdmin;