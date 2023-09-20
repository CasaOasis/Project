import { useState } from 'react'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Dashboard from './components/dashboard/dashboard';

function App() {

  const [usuario, steUsuario] = useState(null); //Crear una variable de estado con dato null (Nada)

  return (
    <>
      <div>
        {usuario ? <Home /> : <Login />}{" "}
        {/*Si la variable de estado es null se redirigira a login ya que no hay un dato valido*/}
        {/*Pero si, si tiene un dato valido, se ridirigira Home*/}
      </div>
    </>
  );
}

export default App
