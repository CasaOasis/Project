import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import '../styles/Credo.scss'; // Asegúrate de tener este archivo para los estilos

function CredoPage() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Puedes personalizar la duración y las opciones
  }, []);

  return (
    <div className="credo-container" data-aos="fade-up">
      <div className="credo-header">
        <h1 className="credo-title" data-aos="fade-up">Nuestro Credo</h1>
      </div>
      <div className="credo-content">
        <div className="credo-text">
          <p data-aos="fade-up">Creo en un solo Dios de amor.</p>
          <p data-aos="fade-up" data-aos-delay="100">Creo en Jesús que vino, murió y resucitó para darnos perdón, gracia y salvación.</p>
          <p data-aos="fade-up" data-aos-delay="200">Creo en el Espíritu Santo que vive en nosotros y nos empodera.</p>
          <p data-aos="fade-up" data-aos-delay="300">Creo que así como recibí por gracia, doy por gracia, por eso predico el evangelio hasta que Cristo regrese por segunda vez.</p>
          <p data-aos="fade-up" data-aos-delay="400">Amén.</p>
        </div>
      </div>
    </div>
  );
}

export default CredoPage;