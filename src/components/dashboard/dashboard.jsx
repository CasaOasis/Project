import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Dbu_navbar from "../dashboard/navbar/dbu_navbar";
import Dbu_sidebar from "./sidebar/dbu_sidebar";

//Importar pages
import Miembros from "./pages/Miembros";
import Programa from "./pages/Programa";
import Registro from "./pages/Registro";

function dashboard() {
  return (
    <div>
      <Dbu_navbar />
      <div className="flex">
        <Dbu_sidebar />
        <div className="content">
          <Routes>
            <Route path="/dashboard/miembros" component={Miembros} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default dashboard;
