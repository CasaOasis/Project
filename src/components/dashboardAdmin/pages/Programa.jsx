import React, { useEffect } from "react";

const ProgramaAdmin = () => {
  useEffect(() => {
    document.title = "Programa"; // Cambia el título de la página aquí
  }, []);
  return <div>Programa</div>;
};

export default ProgramaAdmin;
