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

  useEffect(() => {
    document.title = "Miembros"; // Cambia el título de la página aquí
    fetchMiembros(); // Llama a la función para obtener los miembros al cargar la página
  }, []);

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

  return (
    <div className="container">
      <div className="table-scroll">
        <div className="table">
          <table className="table head">
            <thead className="table-dark">
              {/* Encabezados de la tabla */}
              <tr>
                <th scope="col">Miembros</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th></th>
              </tr>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Edad</th>
                <th scope="col">Phone</th>
                <th scope="col">correo</th>
                <th scope="col"></th>
                <th></th>
                <th>
                  <button className="btn btn-light btn3">
                    <IoIosAdd />
                    Nuevo
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {miembros.map((miembro, index) => (
                <tr key={miembro.id}>
                  <td scope="row">{index + 1}</td>
                  <td>
                    {miembro.photoURL ? (
                      <img
                        src={miembro.photoURL}
                        alt="Foto del miembro"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <img
                        src={userPlaceholder}
                        alt="Imagen predeterminada"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </td>
                  <td>{miembro.name}</td>
                  <td>{miembro.lastname}</td>
                  <td>{miembro.age}</td>
                  <td>{miembro.number}</td>
                  <td>{miembro.email}</td>
                  <td></td>
                  <td></td>
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
      </div>
    </div>
  );
};

export default MiembrosAdmin;
