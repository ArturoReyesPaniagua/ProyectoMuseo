import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pre6.css";

const slides = [
  {
    title: "Auditoría Gráfica: Exposición de Videojuegos GOTY",
    content: "Análisis de exposiciones similares y aprendizajes para nuestro proyecto.",
    isIntro: true
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
    title: "Vista General - Zona Clímax",
    content: "Perspectiva aérea que muestra la disposición de los elementos clave en la sala del GOTY más reciente, con indicaciones de flujo de visitantes y puntos de interacción.",
    hasImage: true,
    imageID: "climax-vista-general"
  },
  {
    title: "Perspectiva de Visitante - Zona Clímax",
    content: "Vista en primera persona que muestra cómo experimentará el visitante la zona, con puntos de interacción claramente señalados.",
    hasImage: true,
    imageID: "climax-perspectiva-visitante"
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

  // Función para renderizar el contenido según su tipo
  const renderContent = (slide) => {
    if (slide.isIntro) {
      return <p className="intro-text">{slide.content}</p>;
    }
    
    if (slide.hasImage) {
      return (
        <div className="image-container">
          <p>{slide.content}</p>
          <div className={`mockup-image ${slide.imageID}`}>
            {/* Esta div se estilizará con CSS para mostrar una representación del diseño */}
            <span className="image-placeholder">Imagen de la zona del clímax</span>
          </div>
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