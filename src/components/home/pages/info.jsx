import React from 'react';
import banner4 from "../../../assets/images/banner/banner4.png";

import '../styles/info.scss'; // Asegúrate de tener los estilos adecuados

function InfoPage() {
  return (
    <div>
      <div className="banner">
        <img src={banner4} alt="" />
      </div>
    <div className="info-container">
      
      <div className="info-header">
        <h1 className="info-title fade-in">Quiénes Somos en Casa Oasis</h1>
      </div>
      <div className="info-content">
        <div className="info-text">
          <p className="fade-in-up">En <strong>Casa Oasis</strong>, nuestro anhelo más profundo es ver a <strong>Jesús</strong> reflejado en todo lo que hacemos. Somos una comunidad que entiende que el mundo necesita un lugar de esperanza, un refugio donde se pueda encontrar la paz y el consuelo que solo Él puede ofrecer. Nos vemos como ese <em>oasis en el desierto de la vida cotidiana</em>, un espacio donde las almas sedientas pueden encontrar el agua de vida que se llama <strong>Jesús</strong>.</p>
          <p className="fade-in-up">Nuestra misión es simple pero poderosa: ser un faro de esperanza para todos aquellos que se sienten perdidos, heridos o cansados. Sabemos que el caminar de la vida puede ser desafiante, y es por eso que trabajamos incansablemente para ofrecer un lugar donde las personas puedan <strong>conocer el amor de Jesús</strong> y experimentar una transformación profunda en sus vidas.</p>
          <h2 className="fade-in-up">¿Cómo lo hacemos?</h2>
          <ul className="fade-in-up">
            <li><strong>Servicios Presenciales:</strong> Nos reunimos semanalmente para adorar, aprender y crecer juntos. Cada servicio está diseñado para experimentar la presencia de Dios de manera real y transformadora.</li>
            <li><strong>Grupos y Congregaciones:</strong> Creemos que la iglesia no solo se encuentra en un edificio, sino en la comunidad. Ofrecemos grupos pequeños donde cada persona puede ser conocida y apoyada en su caminar con Dios.</li>
            <li><strong>Congresos y Eventos Especiales:</strong> Organizamos eventos para profundizar en el conocimiento de Dios y empoderar a las personas para vivir con propósito.</li>
            <li><strong>Redes Sociales:</strong> A través de nuestras plataformas, compartimos el mensaje de esperanza que solo Jesús puede dar, creando una comunidad que trasciende fronteras.</li>
            <li><strong>Ayuda Comunitaria y Social:</strong> Nos dedicamos a ser las manos y los pies de Jesús, llevando ayuda práctica a quienes más lo necesitan en nuestra comunidad.</li>
          </ul>
          <h2 className="fade-in-up">Nuestra Visión: La Gran Misión</h2>
          <p className="fade-in-up">En Casa Oasis, estamos convencidos de que Jesús nos dio una misión clara: <em>"Ir y predicar el evangelio, hacer discípulos y enviarlos a la mies"</em>. Trabajamos día a día para cumplir con esta <strong>gran misión</strong>, no solo como una iglesia que recibe, sino también como una iglesia que envía. Cada persona tiene un propósito único, y nuestra visión es equiparlos y enviarlos para que vivan la misión de Dios en el mundo.</p>
          <p className="fade-in-up">Nos esforzamos por ser un reflejo del amor de Dios, no solo predicando Su palabra, sino viviéndola. Creemos que, a través de nuestras vidas, podemos hacer visible el amor incondicional de Jesús.</p>
          <h2 className="fade-in-up">Lo que nos mueve</h2>
          <p className="fade-in-up">En Casa Oasis, no solo predicamos el evangelio, sino que lo vivimos. Sabemos que Jesús es el centro de nuestra fe. A través de Él, encontramos la paz, la sanidad y el propósito para nuestras vidas. Acompáñanos en este viaje de fe, donde juntos reflejamos el amor de Cristo a un mundo que lo necesita más que nunca.</p>
          <p className="fade-in-up">Nuestro compromiso es hacer del amor de Dios algo tangible. Queremos que cada persona que entre a Casa Oasis se sienta como en casa, rodeado del amor de la comunidad y la presencia de Dios.</p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default InfoPage;