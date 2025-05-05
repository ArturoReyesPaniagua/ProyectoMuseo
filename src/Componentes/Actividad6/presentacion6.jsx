/* src/Componentes/Actividad6/presentacion6.jsx */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pre6.css";

const slides = [
  {
    title: "Auditoría Gráfica: Exposición de Videojuegos GOTY",
    content: "Análisis de exposiciones similares y aprendizajes para nuestro proyecto",
    isIntro: true,
    authors: "ARTURO CRUZ SUÁREZ - ARTURO REYES PANIAGUA",
    subject: "MUSEOGRAFÍA"
  },
  {
    title: "Análisis: The Game Awards Experience (Nueva York)",
    content: {
      similitudes: [
        "Exhibición cronológica de videojuegos premiados",
        "Pantallas para mostrar momentos de premiación",
        "Sala de juegos interactiva"
      ],
      aciertos: [
        "Iluminación direccional que guiaba naturalmente a los visitantes",
        "Uso de audio envolvente que cambiaba según la sala",
        "Códigos QR que ampliaban la información en dispositivos móviles"
      ],
      errores: [
        "Congestión en zonas interactivas por falta de espacios de espera",
        "Poca señalización para el recorrido sugerido",
        "Textos explicativos demasiado extensos que pocos visitantes leían completos"
      ]
    }
  },
  {
    title: "Análisis: Museo del Videojuego (Tokio)",
    content: {
      similitudes: [
        "Salas temáticas por épocas",
        "Exhibición física de consolas y juegos",
        "Áreas de experiencia práctica con juegos clásicos"
      ],
      aciertos: [
        "Proyecciones inmersivas que recreaban el ambiente de la época",
        "Sensores de presencia que activaban contenido audiovisual",
        "Vitrinas con iluminación que resaltaba detalles de los videojuegos físicos"
      ],
      errores: [
        "Falta de zonas de descanso entre las numerosas salas",
        "Problemas técnicos frecuentes en estaciones de juego antiguas",
        "Transiciones abruptas entre salas de diferentes épocas"
      ]
    }
  },
  {
    title: "Análisis: Interactive Gaming History (Londres)",
    content: {
      similitudes: [
        "Recorrido evolutivo del medio",
        "Paneles interactivos con información adicional",
        "Zona de premiaciones y reconocimientos"
      ],
      aciertos: [
        "Pulseras RFID que personalizaban el recorrido según preferencias",
        "Espacios amplios que evitaban aglomeraciones",
        "Sistema de reserva para juegos populares que evitaba largas esperas"
      ],
      errores: [
        "Exceso de elementos interactivos que abrumaba a visitantes menos familiarizados",
        "Deficiente aislamiento acústico entre salas",
        "Tecnología demasiado compleja que requería constante asistencia técnica"
      ]
    }
  },
  {
    title: "Aprendizajes para Nuestra Exposición",
    content: {
      implementar: [
        "Sistema de flujo controlado: Señalización clara y diseño que guíe naturalmente",
        "Zonas buffer: Espacios intermedios para evitar congestiones",
        "Tecnología escalable: Sistemas que funcionen sin complicaciones excesivas",
        "Experiencia personalizable: Posibilidad de profundizar o simplificar según el interés",
        "Equilibrio informativo: Textos concisos con opciones de ampliación"
      ],
      evitar: [
        "Sobrecarga sensorial y de información",
        "Barreras tecnológicas para públicos no especializados",
        "Problemas de accesibilidad",
        "Estancamiento de visitantes en zonas populares",
        "Transiciones bruscas entre ambientes"
      ]
    }
  },
  {
    title: "Recomendaciones Específicas para la Zona Clímax",
    content: [
      "Gradiente de entrada: Crear una transición visual y sonora que prepare al visitante",
      "Sistema de turnos digital: Para evitar aglomeraciones en el panel de votación",
      "Múltiples puntos de visualización: Asegurar que todos puedan apreciar el contenido",
      "Capas de información: Desde lo básico a lo especializado para diferentes públicos",
      "Salida fluida: Evitar 'cuellos de botella' hacia la tienda y salida"
    ]
  },
  {
    title: "VISTA GENERAL - ZONA CLÍMAX: GOTY RECIENTE",
    content: "Perspectiva aérea con interacciones de visitantes",
    hasClimaxDiagram: true
  }
];

function Pre6() {
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

  // SVG Component for Climax Zone
  const ClimaxZoneDiagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" className="climax-diagram">
      {/* Background */}
      <rect width="100%" height="100%" fill="#333" stroke="#000" strokeWidth="2"/>
      
      {/* Main area */}
      <rect x="100" y="100" width="600" height="300" fill="#666" stroke="#000" strokeWidth="2"/>
      
      {/* Main Screen */}
      <rect x="150" y="100" width="500" height="200" fill="#4da6ff" stroke="#000" strokeWidth="2"/>
      <text x="400" y="200" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#fff" fontWeight="bold">PANTALLA PRINCIPAL</text>
      <text x="400" y="230" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#fff">Montaje de momentos memorables</text>
      
      {/* Watching group icon */}
      <circle cx="400" cy="330" r="10" fill="#2ecc71"/>
      <rect x="390" y="340" width="20" height="20" fill="#2ecc71" stroke="#000"/>
      <text x="400" y="370" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#000">Grupo viendo</text>
      
      {/* Demo game area */}
      <rect x="130" y="320" width="200" height="60" fill="#999" stroke="#000" strokeWidth="2"/>
      <text x="230" y="350" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#000" fontWeight="bold">DEMO JUGABLE</text>
      <rect x="160" y="355" width="140" height="20" fill="#777" stroke="#000"/>
      <text x="230" y="370" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#fff">Jugando demo</text>
      
      {/* Central exhibition */}
      <rect x="350" y="310" width="100" height="80" fill="#f1c40f" stroke="#000" strokeWidth="2"/>
      <text x="400" y="350" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#000" fontWeight="bold">EXHIBICIÓN CENTRAL</text>
      <text x="400" y="370" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#000">Videojuego GOTY actual</text>
      
      {/* Voting panel */}
      <rect x="470" y="320" width="140" height="60" fill="#e74c3c" stroke="#000" strokeWidth="2"/>
      <text x="540" y="345" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#fff" fontWeight="bold">PANEL DE VOTACIÓN</text>
      <text x="540" y="365" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#fff">Pantalla táctil</text>
      <text x="540" y="380" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#fff">Usuarios votan favoritos</text>
      
      {/* Social station */}
      <rect x="620" y="150" width="100" height="100" fill="#3498db" stroke="#000" strokeWidth="2"/>
      <text x="670" y="190" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#fff" fontWeight="bold">ESTACIÓN SOCIAL</text>
      <text x="670" y="210" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#fff">Compartir en redes</text>
      <text x="670" y="230" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#fff">Usuarios comparten</text>
      
      {/* Feedback area */}
      <rect x="620" y="270" width="100" height="70" fill="#f8bbd0" stroke="#000" strokeWidth="2"/>
      <text x="670" y="305" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#000" fontWeight="bold">FEEDBACK</text>
      <text x="670" y="325" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#000">Opiniones y sugerencias</text>
      <text x="670" y="340" textAnchor="middle" fontFamily="Arial" fontSize="10" fill="#000">Usuarios opinan</text>
      
      {/* User flow arrows */}
      <path d="M200 200 C 300 200 300 330 230 330" stroke="#ff9800" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
      <path d="M500 200 C 600 200 600 350 540 320" stroke="#ff9800" strokeWidth="3" fill="none" strokeDasharray="5,5"/>
      
      {/* Legend */}
      <rect x="20" y="20" width="200" height="180" fill="#fff" stroke="#000" strokeWidth="2"/>
      <text x="120" y="35" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold">INTERACCIONES</text>
      
      <circle cx="35" cy="60" r="8" fill="#ff6b6b"/>
      <text x="50" y="65" fontFamily="Arial" fontSize="10">Recorrido sugerido</text>
      
      <rect x="30" y="75" width="15" height="15" fill="#3498db"/>
      <text x="50" y="87" fontFamily="Arial" fontSize="10">Interacción visual</text>
      
      <rect x="30" y="95" width="15" height="15" fill="#f1c40f"/>
      <text x="50" y="107" fontFamily="Arial" fontSize="10">Interacción física</text>
      
      <rect x="30" y="115" width="15" height="15" fill="#e74c3c"/>
      <text x="50" y="127" fontFamily="Arial" fontSize="10">Interacción digital</text>
      
      <circle cx="35" cy="145" r="8" fill="#2ecc71"/>
      <text x="50" y="148" fontFamily="Arial" fontSize="10">Interacción jugable</text>
      
      <rect x="30" y="155" width="15" height="15" fill="#9b59b6"/>
      <text x="50" y="167" fontFamily="Arial" fontSize="10">Interacción de input</text>
      
      <circle cx="35" cy="185" r="8" fill="#1abc9c"/>
      <text x="50" y="188" fontFamily="Arial" fontSize="10">Interacción verbal</text>
      
      {/* Title */}
      <text x="400" y="40" textAnchor="middle" fontFamily="Arial" fontSize="20" fill="#fff" fontWeight="bold">VISTA GENERAL - ZONA CLÍMAX: GOTY RECIENTE</text>
      <text x="400" y="65" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#fff">Perspectiva aérea con interacciones de visitantes</text>
    </svg>
  );

  // Function to render content
  const renderContent = (slide) => {
    if (slide.isIntro) {
      return (
        <div className="intro-wrapper">
          <p className="intro-text">{slide.content}</p>
          <p className="authors">{slide.authors}</p>
          <p className="subject">{slide.subject}</p>
        </div>
      );
    }
    
    if (slide.hasClimaxDiagram) {
      return (
        <div className="diagram-wrapper">
          <p className="content-text">{slide.content}</p>
          <ClimaxZoneDiagram />
        </div>
      );
    }
    
    if (Array.isArray(slide.content)) {
      return (
        <ul className="content-list">
          {slide.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    
    if (typeof slide.content === 'object') {
      return (
        <div className="analysis-content">
          {slide.content.similitudes && (
            <div className="analysis-section">
              <h3>Similitudes:</h3>
              <ul>
                {slide.content.similitudes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {slide.content.aciertos && (
            <div className="analysis-section">
              <h3>Aciertos:</h3>
              <ul>
                {slide.content.aciertos.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {slide.content.errores && (
            <div className="analysis-section">
              <h3>Errores:</h3>
              <ul>
                {slide.content.errores.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {slide.content.implementar && (
            <div className="analysis-section">
              <h3>Aspectos a Implementar:</h3>
              <ul>
                {slide.content.implementar.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {slide.content.evitar && (
            <div className="analysis-section">
              <h3>Aspectos a Evitar:</h3>
              <ul>
                {slide.content.evitar.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }
    
    return <p>{slide.content}</p>;
  };

  return (
    <div className="container6">
      <div className="presentation-box6">
        <h1>{slides[currentSlide].title}</h1>
        {renderContent(slides[currentSlide])}
        <div className="button-group6">
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

export default Pre6;