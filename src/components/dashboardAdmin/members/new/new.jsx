import React, { useState } from "react";
import userPlaceholder from "../../../../assets/images/userPlaceholder.png";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore } from "../../../../firebase";
import { Modal, Button } from "react-bootstrap";
import DoneAnim from "../../../animations/DoneAnim";
import "../../pages/styles.scss";
import logo from "../../../../assets/logo.jpg";


function New() {
  const [userPhoto, setUserPhoto] = useState(userPlaceholder); // Estado para almacenar la foto del usuario
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
    history.push('/miembros');
  };

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

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const storage = getStorage(); // Obtener referencia al almacenamiento de Firebase
      const storageRef = ref(storage);

      // Obtener el archivo seleccionado
      const selectedFile = e.target.formFile.files[0];

      const name = e.target.name.value;
      const lastname = e.target.lastname.value;
      const age = e.target.age.value;
      const phone = e.target.phone.value;
      const email = e.target.email.value;

      // Generar un nombre de archivo basado en el ID del documento en Firestore
      const res = await addDoc(collection(firestore, "members"), {
        name: name,
        lastname: lastname,
        age: age,
        number: phone,
        email: email,
        timeStamp: serverTimestamp(),
      });

      const fileId = res.id; // Obtener el ID generado por Firestore
      const fileName = `${fileId}.jpg`; // Crear el nombre del archivo

      // Crear una referencia con el nombre del archivo basado en el ID
      const fileRef = ref(storageRef, `members/picture/${fileName}`);

      // Subir el archivo al almacenamiento de Firebase
      await uploadBytes(fileRef, selectedFile);

      // Obtener la URL de descarga del archivo subido
      const downloadURL = await getDownloadURL(fileRef);

      // Actualizar el documento en Firestore con la URL del archivo
      await updateDoc(doc(firestore, "members", res.id), {
        photoURL: downloadURL,
      });

      // Obtener la URL de descarga del archivo subido
      console.log(res.id);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
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
              name="formFile"
              onChange={handleFileChange} // Manejar el cambio en el campo de archivo
            ></input>
          </div>
          <div className="m-3">
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
            <div
              style={{
                height: "100px",
              }}
            ></div>
          </div>
          <div className="m-3">
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
            <button type="submit" className="btn btn-dark btn-lg">
              Registrar
            </button>
          </div>
        </div>
      </form>
      <div>
        <Modal
          show={showModal}
          onHide={handleModalClose}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title><><img src={logo} alt="Logo" className="logo"/></></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <i>¡Miembro agregado con éxito!</i>
            <DoneAnim />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="btn btn-dark" onClick={handleModalClose}>
              Listo
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default New;
