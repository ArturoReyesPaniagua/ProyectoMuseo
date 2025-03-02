import { useState } from "react";
import "./pre3.css";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    "title": "¿Cuáles serían sus usuarios principales?",
    "content": "Aficionados a los videojuegos, entusiastas de la historia del gaming (esto incluye todas las edades, recordemos que los videojuegos tienen 70 años, todos los géneros y religiones), coleccionistas y desarrolladores de software. Personas como mi compañero de equipo y yo."
},
{
    "title": "¿Cuáles serían sus usuarios secundarios?",
    "content": "Familias, turistas, académicos e investigadores interesados en la evolución de los videojuegos como fenómeno cultural, artístico y tecnológico. Aquí queremos explicar que los videojuegos son el octavo arte, trascendiendo la historia hacia la interactividad con el usuario, algo que nos gustaría difundir a todas las personas."
},
{
    "title": "¿Cuáles son los requerimientos funcionales de nuestra exposición?",
    "content": [
        "Zonas interactivas con consolas, juegos tanto retro como modernos y altavoces difundiendo información sobre los juegos.",
        "Secciones temáticas (historia, tecnología, arte y cultura totalmente centradas en videojuegos y consolas).",
        "Explicaciones accesibles con infografías (reactivas o interactivas con el usuario), videos y experiencias inmersivas.",
        "Espacios para eventos, conferencias, talleres de desarrollo de videojuegos y perfeccionamiento de técnicas en juegos.",
        "Accesibilidad para todas las edades y niveles de conocimiento (desde principiantes hasta expertos)."
    ]
},
{
    "title": "¿Cuáles son los requerimientos expresivos de nuestra exposición?",
    "content": [
        "Diseño visual atractivo y nostálgico, evocando distintas épocas del gaming y las diferentes compañías desarrolladoras (tanto de consolas como de juegos). Por ejemplo, una sala dedicada a Nintendo, otra a Xbox y su evolución a través del tiempo.",
        "Uso de luces (por ejemplo, en el caso de Xbox, luces verdes y plateadas), sonidos (soundtracks temáticos de juegos emblemáticos y de las consolas) y pantallas para crear una atmósfera inmersiva con logos, personajes y escenas específicas.",
        "Narrativa clara que muestre la evolución de los videojuegos como arte, pasión (como la de sus servidores) y tecnología.",
        "Vinculación con la comunidad gamer y la industria del desarrollo."
    ]
},
{
    "title": "Define tu idea rectora en un enunciado.",
    "content": "Explorar la evolución de los videojuegos como un arte interactivo que ha transformado la cultura, la tecnología y el entretenimiento a nivel global."
}




];

function Pre3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); 

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
      <button onClick={() => navigate('/')}>Regresar</button>
    </div>
  );
 
}

export default Pre3;

