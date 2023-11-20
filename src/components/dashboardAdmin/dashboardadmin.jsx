import {React} from "react";


import { Routes, Route, Outlet } from "react-router-dom";
import Dbu_navbar from "../dashboard/navbar/dbu_navbar";
import Dbu_sidebar from "./sidebar/dbu_sidebar";
import "./dashboard.scss"

//Importar pages
import Miembros from "./pages/Miembros";
import Programa from "./pages/Programa";
import Registro from "./pages/Registro";

function DashboardAdmin() {
  
  return (
    <div>
      <Dbu_navbar />
      <div className="flex">
        <Dbu_sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
