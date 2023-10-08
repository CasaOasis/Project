import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import "./components/styles.scss";

import CredoPage from "./pages/credo";
import HomePage from "./pages/home";
import InfoPage from "./pages/info";
import Error from "../error/Error";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="sizebox"></div>
      <div className="contentpages">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/credo" element={<CredoPage />} />
          <Route path="/about" element={<InfoPage />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
