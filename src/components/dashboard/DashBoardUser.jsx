import React from "react";
import DashboardNavbar from "./navbar/DashboardNavbar";
import DashboardSidebar from "./sidebar/DasboardSidebar";
import Miembros from "./pages/Miembros";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Dashboard.scss";

function DashBoardUser() {
  return (
    <>
      <Router>
        <DashboardNavbar />
        <div className="flex">
          <DashboardSidebar />
          <div className="content">
          {/* <Route path='/' component={Miembros}/> */}
            
          </div>
        </div>
      </Router>
    </>
  );
}

export default DashBoardUser;
