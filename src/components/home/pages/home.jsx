import React, { useEffect } from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

import banner1 from "../../../assets/images/banner/banner1.png";
import banner2 from "../../../assets/images/banner/banner2.png";
import banner3 from "../../../assets/images/banner/banner3.png";
import card1 from "../../../assets/images/cards/card1.jpg"; // Sustituye con tus imágenes
import card2 from "../../../assets/images/cards/card2.jpg";
import card3 from "../../../assets/images/cards/card3.jpg";

import "../styles/Home.scss";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 4000, once: true });
  }, []);

  return (
    <div className="homepage">
      {/* Carrusel */}
      <Carousel interval={3000} pause="hover">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      {/* Cards Section */}
      <div className="cards-section">
        <div className="cards-title" data-aos="fade-up">
          <h2>Conoce Más Sobre Nosotros</h2>
        </div>
        <div className="cards-grid">
          <div
            className="card-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Card>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Servicio de Adoración</Card.Title>
                <Card.Text>
                  Ven y experimenta momentos de conexión espiritual y adoración
                  sincera.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div
            className="card-container"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Card>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>Actividades Juveniles</Card.Title>
                <Card.Text>
                  Actividades dinámicas y llenas de energía para que los jóvenes
                  crezcan en su fe.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div
            className="card-container"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Card>
              <Card.Img variant="top" src={card3} />
              <Card.Body>
                <Card.Title>Casa Oasis Kids</Card.Title>
                <Card.Text>
                  La alegría de la niñez es el reflejo de la esperanza en el
                  corazón.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Location */}
        <div className="location">
          <h2 data-aos="fade-up">Encuentra nuestra iglesia</h2>
          <iframe
            data-aos="fade-up"
            className="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.5280049959883!2d-90.83725645327986!3d14.625942986000059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85891500391c0fe7%3A0xf741ff561298143e!2sCasa%20Oasis!5e0!3m2!1ses-419!2sgt!4v1735861284786!5m2!1ses-419!2sgt"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación Iglesia Casa Oasis"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
