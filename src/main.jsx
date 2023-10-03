import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//Mandando a llamar los componentes
import ErrorPage from "./components/error/Error.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";

//Mandando a llamar los componentes de dashboard
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DbuHome from "./components/dashboard/pages/Home/DbuHome.jsx";
import Miembros from "./components/dashboard/pages/Miembros.jsx";
import Registro from "./components/dashboard/pages/Registro.jsx";
import Programa from "./components/dashboard/pages/Programa.jsx";
import Home from "./components/home/Home.jsx";
import Credo from "./components/home/pages/credo.jsx";
import InfoPage from "./components/home/pages/info.jsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
    children: [
      {
        path: "credo",
        element: <Credo />,
      },
      {
        path: "about",
        element: <InfoPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DbuHome />,
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
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
