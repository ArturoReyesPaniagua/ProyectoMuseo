import { useState } from "react";
import "./presentacion.css";

const slides = [
  {
    "title": "¿Cuál te gustaría que fuera el tema principal de tu exposición de museografía?",
    "content": "La evolución de los juegos GOTY a lo largo del tiempo."
},
{
    "title": "¿Cuáles serían los subtemas de tu exposición de museografía?",
    "content": "Historia de los premios GOTY \n Impacto cultural de los juegos ganadores \n Innovaciones tecnológicas introducidas por los juegos GOTY \n Análisis de los géneros más premiados\nInfluencia de los juegos GOTY en la industria del entretenimiento"
},
{
    "title": "¿Qué quiere comunicar tu exposición?",
    "content": "Mostrar cómo los juegos GOTY han influido en la cultura popular, la tecnología y la industria del entretenimiento, destacando su evolución y su impacto en los jugadores y desarrolladores."
},
{
    "title": "¿En dónde se llevará a cabo? (puede ser un espacio real o ficticio)",
    "content": "La exposición podría llevarse a cabo en cualquier espacio amplio, se podría adecuar cualquier lugar que cuente con los servicios mínimos."
},
{
    "title": "¿Cuánto tiempo durará tu exposición?",
    "content": "Podría durar de 2 horas a 2 horas y media."
},
{
    "title": "¿Con qué recursos contarías?",
    "content": "Pantallas interactivas y estaciones de juego \n Realidad virtual y aumentada para recrear escenas icónicas de los juegos\nDocumentales y entrevistas con desarrolladores y jugadores\nArte conceptual y bocetos originales de los juegos"
},
{
    "title": "¿Qué objetos están incluidos?",
    "content": "Consolas y dispositivos de juego históricos \n Copias físicas de los juegos ganadores \n Trofeos y premios originales\nMerchandising y memorabilia de los juegos"
}


];

function Presentacion() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="container">
      <div className="presentation-box">
        <h1>{slides[currentSlide].title}</h1>
        <p>{slides[currentSlide].content}</p>
        <div className="button-group">
          <button onClick={prevSlide} disabled={currentSlide === 0}>
            Anterior
          </button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
