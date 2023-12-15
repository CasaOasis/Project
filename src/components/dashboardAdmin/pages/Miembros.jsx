import React, { useEffect } from "react";

const MiembrosAdmin = () => {
  useEffect(() => {
    document.title = "Miembros"; // Cambia el título de la página aquí
  }, []);

  return <div>Miembros</div>;
};

export default MiembrosAdmin;
