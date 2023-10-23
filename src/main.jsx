import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Error from "./components/error/Error.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import DbuHome from "./components/dashboard/pages/Home/DbuHome.jsx";
import Miembros from "./components/dashboard/pages/Miembros.jsx";
import Registro from "./components/dashboard/pages/Registro.jsx";
import Programa from "./components/dashboard/pages/Programa.jsx";
import Home from "./components/home/Home.jsx";
import Credo from "./components/home/pages/credo.jsx";
import InfoPage from "./components/home/pages/info.jsx";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      {/* Main page */}
      <Routes>
        <Route path="*" element={<Home />}>
          <Route path="credo" element={<Credo />} />
          <Route path="about" element={<InfoPage />} />
        </Route>
        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DbuHome />} />
          <Route path="miembros" element={<Miembros />} />
          <Route path="registro" element={<Registro />} />
          <Route path="programa" element={<Programa />} />
        </Route>
        {/* Login and register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
