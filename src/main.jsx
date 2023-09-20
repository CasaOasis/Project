import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Mandando a llamar los componentes
import Error from "./components/error/Error.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";

//Mandando a llamar los componentes de dashboard
import Miembros from "./components/dashboard/pages/Miembros.jsx";
import Registro from "./components/dashboard/pages/Registro.jsx";
import Programa from "./components/dashboard/pages/Programa.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DbuHome from './components/dashboard/pages/Home/DbuHome.jsx';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DbuHome/>
      },
      {
        path: "miembros",
        element: <Miembros />,
      },
      {
        path: "registro",
        element: <Registro />,
      },
      {
        path: "programa",
        element: <Programa />,
      },
    ],
  },
  {
    path: "/login",
    element: <App />,
    errorElement: <Error/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
