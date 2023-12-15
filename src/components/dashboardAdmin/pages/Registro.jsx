import React, { useEffect } from "react";
import New from "../members/new/new";

const RegistroAdmin = () => {
  useEffect(() => {
    document.title = "Registro"; // Cambia el título de la página aquí
  }, []);
  return (
    <div>
      <New />
    </div>
  );
};

export default RegistroAdmin;
