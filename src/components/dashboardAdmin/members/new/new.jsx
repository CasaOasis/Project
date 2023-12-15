import React, { useState } from "react";
import userPlaceholder from "../../../../assets/images/userPlaceholder.png";

function New() {
  const [userPhoto, setUserPhoto] = useState(userPlaceholder); // Estado para almacenar la foto del usuario

  // Función para manejar el cambio en el campo de archivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; // Obtener el archivo seleccionado
    const reader = new FileReader();

    // Leer el archivo como una URL de datos
    reader.onloadend = () => {
      setUserPhoto(reader.result); // Actualizar el estado con la URL de la imagen
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile); // Convertir el archivo a una URL de datos
    }
  };

  return (
    <form action="">
      <div className="container">
        <div className="mb-3 p-5">
          {/* <div className="mb-3"></div> */}
          {/* Mostrar la imagen seleccionada */}
          <img
            src={userPhoto} // Utilizar el estado para mostrar la imagen seleccionada
            alt=""
            className="rounded-circle m-5"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
            }}
          />
          {/* Input para seleccionar un archivo */}
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleFileChange} // Manejar el cambio en el campo de archivo
          ></input>
        </div>
        <div className="mb-3">
          <div className="form-group mb-4 input-group-lg">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Type"
            />
          </div>
          <div className="form-group mb-4 input-group-lg">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Type"
            />
          </div>
          <div style={{
            height: "100px"
          }}></div>
        </div>
        <div className="mb-3">
          <div className="form-group mb-4 input-group-lg">
            <label>Edad</label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              placeholder="Type"
            />
          </div>
          <div className="form-group mb-4 input-group-lg">
            <label>Numero</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Type"
            />
          </div>
          <div className="form-group mb-4 input-group-lg">
            <label>Correo</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Type"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default New;
