/* src/Componentes/Actividad5/presentacion5.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./pre5.css";

const Pre5 = () => {
  const navigate = useNavigate();

  return (
    <div className="container5">
      <div className="presentation-box5">
        <h1>Actividad 5: Plano de Recorrido</h1>
        
        <p className="content-text">
          Plano de la exposición "Exposición de Videojuegos GOTY" con el recorrido
          sugerido y distribución de espacios.
        </p>

        <div className="blueprint-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="blueprint-image">
            <rect width="100%" height="100%" fill="#f8f9fa"/>
            
        
            <g transform="translate(30, 30)">
              <rect width="160" height="260" fill="#ffffff" stroke="#333" rx="5"/>
              <text x="80" y="25" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold">LEYENDA</text>
              
              <rect x="10" y="40" width="20" height="20" fill="#f1c40f"/>
              <text x="40" y="55" fontFamily="Arial" fontSize="12">Exhibición de Videojuego</text>
              
              <rect x="10" y="70" width="20" height="20" fill="#3498db"/>
              <text x="40" y="85" fontFamily="Arial" fontSize="12">Pantalla/Proyección</text>
              
              <rect x="10" y="100" width="20" height="20" fill="#2ecc71"/>
              <text x="40" y="115" fontFamily="Arial" fontSize="12">Panel Informativo</text>
              
              <rect x="10" y="130" width="20" height="20" fill="#5dade2"/>
              <text x="40" y="145" fontFamily="Arial" fontSize="12">Panel Interactivo</text>
              
              <rect x="10" y="160" width="20" height="20" fill="#e74c3c"/>
              <text x="40" y="175" fontFamily="Arial" fontSize="12">Estación de Juego</text>
              
              <rect x="10" y="190" width="20" height="20" fill="#f39c12"/>
              <text x="40" y="205" fontFamily="Arial" fontSize="12">Área Social/Eventos</text>
            </g>
          
            <rect x="350" y="50" width="100" height="30" fill="#666" stroke="#333"/>
            <text x="400" y="70" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#fff">ENTRADA</text>
            
          
            <circle cx="400" cy="110" r="15" fill="#5dade2"/>
            <text x="400" y="135" textAnchor="middle" fontFamily="Arial" fontSize="10">Panel Interactivo</text>
            <text x="400" y="148" textAnchor="middle" fontFamily="Arial" fontSize="10">Linea de Tiempo</text>
            
           
            <rect x="260" y="170" width="180" height="80" fill="#e8c0b5" stroke="#333"/>
            <text x="350" y="195" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold">SALA 1: LOS PIONEROS</text>
            
            <rect x="270" y="215" width="40" height="30" fill="#f1c40f"/>
            <text x="290" y="235" textAnchor="middle" fontFamily="Arial" fontSize="10">Videojuego</text>
            
            <rect x="320" y="215" width="40" height="30" fill="#3498db"/>
            <text x="340" y="235" textAnchor="middle" fontFamily="Arial" fontSize="10">Pantalla</text>
            
            <rect x="370" y="215" width="50" height="30" fill="#2ecc71"/>
            <text x="395" y="235" textAnchor="middle" fontFamily="Arial" fontSize="10">Descripción</text>
            
            <text x="350" y="265" textAnchor="middle" fontFamily="Arial" fontSize="11" fontStyle="italic">Estética Retro</text>
            
           
            <rect x="260" y="270" width="180" height="80" fill="#b39ddb" stroke="#333"/>
            <text x="350" y="295" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold">SALA 2: LA EVOLUCIÓN</text>
            
            <rect x="270" y="315" width="40" height="30" fill="#f1c40f"/>
            <text x="290" y="335" textAnchor="middle" fontFamily="Arial" fontSize="10">Videojuego</text>
            
            <rect x="320" y="315" width="40" height="30" fill="#3498db"/>
            <text x="340" y="335" textAnchor="middle" fontFamily="Arial" fontSize="10">Pantalla</text>
            
            <rect x="370" y="315" width="50" height="30" fill="#2ecc71"/>
            <text x="395" y="335" textAnchor="middle" fontFamily="Arial" fontSize="10">Descripción</text>
            
            <text x="350" y="365" textAnchor="middle" fontFamily="Arial" fontSize="11" fontStyle="italic">Estética Adaptada</text>
            
          
            <rect x="40" y="370" width="120" height="130" fill="#c8e6c9" stroke="#333"/>
            <text x="100" y="395" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold">SALAS 3+</text>
            
            <rect x="65" y="420" width="70" height="30" fill="#f1c40f"/>
            <text x="100" y="440" textAnchor="middle" fontFamily="Arial" fontSize="10">Videojuegos</text>
            
            <circle cx="100" cy="470" r="15" fill="#5dade2"/>
            <text x="100" y="475" textAnchor="middle" fontFamily="Arial" fontSize="10">Interactivos</text>
            
         
            <rect x="460" y="170" width="140" height="140" fill="#f8bbd0" stroke="#333"/>
            <text x="530" y="195" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold">SALA DE CONVIVENCIA</text>
            
            <circle cx="490" cy="230" r="15" fill="#5dade2"/>
            <text x="490" y="255" textAnchor="middle" fontFamily="Arial" fontSize="10">Cafetería</text>
            
            <circle cx="530" cy="230" r="15" fill="#f39c12"/>
            <text x="530" y="255" textAnchor="middle" fontFamily="Arial" fontSize="10">Área de</text>
            <text x="530" y="265" textAnchor="middle" fontFamily="Arial" fontSize="10">Descanso</text>
            
            <circle cx="570" cy="230" r="15" fill="#2ecc71"/>
            <text x="570" y="255" textAnchor="middle" fontFamily="Arial" fontSize="10">Tienda</text>
            
            <rect x="490" y="270" width="90" height="30" fill="#f39c12"/>
            <text x="535" y="290" textAnchor="middle" fontFamily="Arial" fontSize="10">Área de Eventos</text>
           
            <rect x="490" y="340" width="160" height="120" fill="#80deea" stroke="#333"/>
            <text x="570" y="365" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold">SALA DE JUEGOS</text>
            
            <rect x="510" y="390" width="50" height="50" fill="#e74c3c"/>
            <text x="535" y="415" textAnchor="middle" fontFamily="Arial" fontSize="10">Estaciones</text>
            <text x="535" y="430" textAnchor="middle" fontFamily="Arial" fontSize="10">de Juego</text>
            
            <rect x="580" y="390" width="50" height="50" fill="#e74c3c"/>
            <text x="605" y="415" textAnchor="middle" fontFamily="Arial" fontSize="10">Estaciones</text>
            <text x="605" y="430" textAnchor="middle" fontFamily="Arial" fontSize="10">de Juego</text>
            
            <rect x="535" y="445" width="80" height="10" fill="#f39c12"/>
            <text x="575" y="453" textAnchor="middle" fontFamily="Arial" fontSize="9">Área de Torneos</text>
            
          
            <rect x="270" y="380" width="140" height="120" fill="#ffa726" stroke="#333"/>
            <text x="340" y="400" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold">CLÍMAX: GOTY RECIENTE</text>
            
            <rect x="290" y="430" width="50" height="50" fill="#f1c40f"/>
            <text x="315" y="455" textAnchor="middle" fontFamily="Arial" fontSize="10">Videojuego</text>
            <text x="315" y="468" textAnchor="middle" fontFamily="Arial" fontSize="10">Actual</text>
            
            <rect x="350" y="430" width="40" height="50" fill="#3498db"/>
            <text x="370" y="455" textAnchor="middle" fontFamily="Arial" fontSize="10">Pantalla</text>
            <text x="370" y="468" textAnchor="middle" fontFamily="Arial" fontSize="10">Principal</text>
            
            <rect x="300" y="485" width="80" height="10" fill="#5dade2"/>
            <text x="340" y="493" textAnchor="middle" fontFamily="Arial" fontSize="9">Panel Votación</text>
            
          
            <rect x="350" y="510" width="100" height="30" fill="#666" stroke="#333"/>
            <text x="400" y="530" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#fff">SALIDA | TIENDA</text>
            
        
            <path d="M400 140 L400 170" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <path d="M440 250 L460 250" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <path d="M350 350 L350 380" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <path d="M340 380 L340 510" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <path d="M440 380 L490 380" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            <path d="M260 380 L260 440" stroke="#333" strokeWidth="2" markerStart="url(#arrowheadback)"/>
            <path d="M260 440 L160 440" stroke="#333" strokeWidth="2" markerEnd="url(#arrowhead)"/>
            
           
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
              </marker>
              <marker id="arrowheadback" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                <polygon points="10 0, 0 3.5, 10 7" fill="#333"/>
              </marker>
            </defs>
          </svg>
        </div>

        <h2 style={{ color: "#4da6ff", marginTop: "30px" }}>Leyenda del Plano</h2>
        <div className="legend">
          <div className="legend-item">
            <div className="legend-icon yellow"></div>
            <span>Exhibición de Videojuego</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon blue"></div>
            <span>Pantalla/Proyección</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon green"></div>
            <span>Panel Informativo</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon light-blue"></div>
            <span>Panel Interactivo</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon red"></div>
            <span>Estación de Juego</span>
          </div>
          <div className="legend-item">
            <div className="legend-icon orange"></div>
            <span>Área Social/Eventos</span>
          </div>
        </div>

        <h2 style={{ color: "#4da6ff", marginTop: "30px" }}>Descripción del Recorrido</h2>
        <ul className="description-list">
          <li>
            <strong>Entrada:</strong> Panel Interactivo con Línea de Tiempo de videojuegos GOTY
          </li>
          <li>
            <strong>Sala 1: Los Pioneros:</strong> Exhibición del primer videojuego GOTY con estética retro
          </li>
          <li>
            <strong>Sala 2: La Evolución:</strong> Muestra la evolución tecnológica y narrativa con estética adaptada
          </li>
          <li>
            <strong>Salas 3+:</strong> Videojuegos interactivos y experiencias inmersivas
          </li>
          <li>
            <strong>Clímax: GOTY Reciente:</strong> Videojuego actual con pantalla principal y panel de votación
          </li>
          <li>
            <strong>Sala de Juegos:</strong> Estaciones de juego, torneos y área de demos
          </li>
          <li>
            <strong>Sala de Convivencia:</strong> Cafetería, área de descanso y tienda de recuerdos
          </li>
          <li>
            <strong>Salida:</strong> Tienda de souvenirs
          </li>
        </ul>
      </div>
      
      <button className="back-button" onClick={() => navigate('/')}>
        Regresar al Menú
      </button>
    </div>
  );
};

export default Pre5;