import React, { useState, useRef } from "react";
import userPlaceholder from "../../../../assets/images/userPlaceholder.png";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { firestore, storage } from "../../../../firebase"; // Importamos Firestore y Storage
import { Modal, Button } from "react-bootstrap";
import DoneAnim from "../../../animations/DoneAnim";
import "../../pages/styles.scss";
import logo from "../../../../assets/logo.jpg";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./new.scss";
import { uploadImageToFirebase } from "../../../../firebase"; // Importa la función

function New() {
  const [userPhoto, setUserPhoto] = useState(userPlaceholder);
  const [showModal, setShowModal] = useState(false);
  const [showCropperModal, setShowCropperModal] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const handleModalClose = () => setShowModal(false);
  const handleCropperModalClose = () => setShowCropperModal(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserPhoto(reader.result);
      setShowCropperModal(true);
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    // Obtener la imagen recortada
    const cropper = cropperRef.current?.cropper;
    const croppedDataUrl = cropper?.getCroppedCanvas()?.toDataURL();
    if (!croppedDataUrl) {
      console.error("No se pudo obtener la imagen recortada.");
      return;
    }
    setCroppedImage(croppedDataUrl);

    try {
      const name = e.target.name.value;
      const lastname = e.target.lastname.value;
      const age = e.target.age.value;
      const phone = e.target.phone.value;
      const email = e.target.email.value;

      // Crear un nuevo miembro en Firestore
      const res = await addDoc(collection(firestore, "members"), {
        name,
        lastname,
        age,
        number: phone,
        email,
        timeStamp: serverTimestamp(),
      });

      const memberId = res.id; // ID del miembro recién creado

      // Subir la imagen recortada a Firebase y obtener la URL
      const downloadURL = await uploadImageToFirebase(croppedDataUrl, memberId);

      // Actualizar el miembro con la URL de la foto
      await updateDoc(doc(firestore, "members", memberId), {
        photoURL: downloadURL,
      });

      setShowModal(true); // Mostrar modal de éxito
    } catch (error) {
      console.error("Error al agregar el miembro:", error);
    }
  };

  return (
    <div className="container-fluid form-container">
      <form onSubmit={handleAdd}>
        <div className="row justify-content-center my-4">
          <div className="col-md-6 col-12 text-center">
            <div style={{ width: "150px", height: "150px" }}>
              <img
                src={userPhoto}
                alt="User"
                className="rounded-circle mb-3"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
              />
            </div>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="formFile"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-12 mb-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Ingresa el nombre"
              required
            />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              placeholder="Ingresa el apellido"
              required
            />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label>Edad</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              placeholder="Ingresa la edad"
              required
            />
          </div>
          <div className="col-md-6 col-12 mb-3">
            <label>Número de Teléfono</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Ingresa el número"
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label>Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Ingresa el correo"
              required
            />
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-dark btn-lg">
            Registrar
          </button>
        </div>
      </form>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={logo} alt="Logo" className="logo" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¡Miembro agregado con éxito!</p>
          <DoneAnim />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-dark" onClick={handleModalClose}>
            Listo
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCropperModal} onHide={handleCropperModalClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Recorta tu imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              width: "100%",
              height: "500px",
              maxWidth: "100%",
              position: "relative",
            }}
          >
            <Cropper
              ref={cropperRef}
              src={userPhoto}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
              aspectRatio={1}
              guides={false}
              viewMode={2}
              movable={true}
              zoomable={true}
              cropBoxResizable={true}
              cropBoxMovable={true}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCropperModalClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const cropper = cropperRef.current?.cropper;
              const croppedDataUrl = cropper?.getCroppedCanvas()?.toDataURL();
              if (croppedDataUrl) {
                setUserPhoto(croppedDataUrl);
                setShowCropperModal(false);
              }
            }}
          >
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default New;