import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase";
import userPlaceholder from "../../../assets/images/userPlaceholder.png";

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
    <div>
      <div className="container">
        <table className="table">
          <thead className="table-dark">
            {/* Encabezados de la tabla */}
            <tr>
              <th scope="col">#</th>
              <th scope="col">Foto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Edad</th>
              <th scope="col">Phone</th>
              <th scope="col">correo</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* Renderizado dinámico de los datos de los miembros */}
            {miembros.map((miembro, index) => (
              <tr key={miembro.id}>
                <th scope="row">{index + 1}</th>
                {/* Renderiza los campos de cada miembro */}
                <td>
                  {miembro.photoURL ? (
                    <img
                      src={miembro.photoURL}
                      alt="Foto del miembro"
                      style={{
                        width: "50px", // Ajusta el tamaño según sea necesario
                        height: "50px",
                        borderRadius: "50%", // Borde redondeado para la imagen circular
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
                <td></td> {/* Celda vacía para acciones */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MiembrosAdmin;
