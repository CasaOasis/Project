import React, { useState } from "react";
import "./footer.scss";
import logo from "../../../assets/logo.jpg";
import * as FaIcons from "react-icons/fa";
import * as Gia from "react-icons/gr";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <div className="body">      
      <div className="footer">
        <div className="start">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <div className="social">
            <ul>
              <li>
                <a
                  href="https://instagram.com/casaoasisgt?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcons.FaInstagram />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaIcons.FaYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100094911880619&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaIcons.FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="end">
          <div className="card">
            <div className="info">
              <h2>Iglesia Casa Oasis</h2>
              <h3>San Andrés Itzapa, Chimaltenango</h3>
              <h2>Horarios de servicios</h2>
              <h3>Domingos a las 10:00 AM</h3>
              <h3>Martes a las 7:00 PM</h3>
              <h3>Jueves a las 7:00 PM</h3>
              <h3>Sabado a las 7:00 PM</h3>
              <h3>Domingos a las 7:00 PM</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Todos los derechos reservados {currentYear} &copy; Casa oasis</p>
      </div>
    </div>
  );
}

export default Footer;
