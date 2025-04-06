import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pre4.css";

const slides = [
  {
    title: "Narrativa del Recorrido: Exposición de Videojuegos GOTY",
    content: "Una experiencia inmersiva por la historia de los videojuegos que han ganado el prestigioso premio GOTY a lo largo de los años."
  },
  {
    title: "Entrada",
    content: "El visitante ingresa a un pasillo iluminado, con un diseño moderno y minimalista, que evoca la estética de los videojuegos. En la pared inicial, un panel interactivo muestra una línea de tiempo con los videojuegos que han ganado el premio GOTY a lo largo de los años."
  },
  {
    title: "Sala 1: Los Pioneros",
    content: "El visitante ingresa a la primera sala, donde se presenta el primer videojuego GOTY. El juego se exhibe en su formato físico, junto con una descripción detallada que resalta sus características innovadoras, su impacto en la industria y el tiempo que duró su desarrollo. En una gran pantalla, se reproduce el momento exacto en el que el videojuego ganó el premio, con la reacción del equipo de desarrollo y la emoción del público. La sala está diseñada con una estética retro, que evoca la época en la que se lanzó el juego."
  },
  {
    title: "Sala 2: La Evolución",
    content: "El visitante avanza a la siguiente sala, donde se exhibe otro videojuego GOTY, con su respectiva descripción y video del momento de premiación. Cada sala representa un hito en la historia de los videojuegos, mostrando la evolución de la tecnología, la narrativa y el diseño de juegos. La estética de cada sala se adapta al estilo del videojuego que se exhibe."
  },
  {
    title: "Salas 3 y siguientes",
    content: "El recorrido continúa por las salas, cada una dedicada a un videojuego GOTY diferente. Las descripciones resaltan los aspectos que hicieron que cada juego fuera merecedor del premio, como su jugabilidad innovadora, su narrativa profunda, su impacto cultural o su excelencia técnica. Se pueden incluir elementos interactivos en algunas salas, como pantallas táctiles con información adicional o estaciones de juego con demos de los videojuegos."
  },
  {
    title: "Sala de Juegos",
    content: "Una sala amplia y luminosa está dedicada a la experiencia de juego. Los visitantes pueden jugar demos de algunos de los videojuegos GOTY en consolas modernas o computadoras de alta gama. Se pueden organizar torneos o sesiones de juego libre para fomentar la interacción entre los visitantes."
  },
  {
    title: "Sala de Convivencia",
    content: "Un espacio cómodo y relajado está diseñado para que los visitantes puedan conversar, compartir sus experiencias y tomar un descanso. Se pueden incluir sofás, mesas, una cafetería y una tienda de recuerdos. Se pueden organizar eventos especiales, como charlas con desarrolladores de videojuegos o sesiones de preguntas y respuestas con expertos en la industria."
  },
  {
    title: "Clímax",
    content: "Al final del recorrido, se encuentra una sala especial que alberga el videojuego GOTY más reciente. La pantalla principal muestra un montaje con los momentos más memorables de la ceremonia de premiación, incluyendo la entrega del premio y las reacciones de los ganadores. Un panel interactivo permite a los visitantes votar por su videojuego GOTY favorito y compartir sus opiniones en las redes sociales."
  },
  {
    title: "Salida",
    content: "El visitante sale de la exposición con una sensación de nostalgia y admiración por los videojuegos que han dejado una huella imborrable en la industria. Un pequeño espacio de recuerdos ofrece a los visitantes la oportunidad de adquirir productos relacionados con los videojuegos GOTY, como camisetas, pósters o libros de arte."
  },
  {
    title: "Elementos Clave",
    content: [
      "Salas temáticas: para exhibir los videojuegos en su formato físico y crear una experiencia inmersiva.",
      "Pantallas: para mostrar los momentos de premiación y otros contenidos audiovisuales.",
      "Paneles interactivos: para proporcionar información adicional y permitir la participación de los visitantes.",
      "Iluminación: para crear un ambiente inmersivo y destacar los elementos clave de la exposición.",
      "Diseño minimalista: para enfocar la atención en los videojuegos y su historia.",
      "Sala de juegos: para ofrecer una experiencia interactiva y divertida.",
      "Sala de convivencia: para fomentar la interacción social y el intercambio de ideas."
    ]
  }
];

function Pre4() {
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

  // Función para renderizar el contenido, ya sea texto simple o una lista
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul className="content-list">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div className="container4">
      <div className="presentation-box4">
        <h1>{slides[currentSlide].title}</h1>
        {renderContent(slides[currentSlide].content)}
        <div className="button-group4">
          <button onClick={prevSlide} disabled={currentSlide === 0}>
            Anterior
          </button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            Siguiente
          </button>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Regresar al Menú</button>
    </div>
  );
}

export default Pre4;