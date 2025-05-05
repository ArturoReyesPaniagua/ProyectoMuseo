/* src/Componentes/Actividad8/presentacion8.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./pre8.css";

const Pre8 = () => {
  const navigate = useNavigate();

  return (
    <div className="container8">
      <div className="presentation-box8">
        <h1>ACTIVIDAD 8</h1>
        <p style={{ marginBottom: '20px', fontWeight: 'bold' }}>
          ARTURO CRUZ SUÁREZ - 2183088022<br />
          ARTURO REYES PANIAGUA - 2193035784<br />
          MUSEOGRAFÍA
        </p>

        <div className="notice-box">
          <div className="notice-title">AVISO:</div>
          <div className="notice-text">
            Debido a una decisión de equipo, el proyecto final consistirá
            en un sitio web que servirá como una exposición digital.
            Aquí se presentan bosquejos de las interfaces que el usuario
            verá durante la exposición.
          </div>
        </div>

        <div className="sketch-container">
          <div className="sketch-card">
            <div className="sketch-title">GOTY</div>
            <div className="game-boxes">
              <div className="game-box">JUEGO</div>
              <div className="game-box">JUEGO</div>
              <div className="game-box">JUEGO</div>
              <div className="game-box">JUEGO</div>
            </div>
          </div>

          <div className="sketch-card">
            <div className="sketch-title">JUEGO</div>
            <div className="description-box">
              Descripción que incluya los
              los factores que le ayudaría
              a ganar el GOTY
            </div>
            <div className="gameplay-box">gameplay</div>
          </div>
        </div>

        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          La intención es que la versión final se vea algo similar a esto:
        </p>

        <div className="mockup-image">
          <div className="mockup-title">VIDEO GAME GOTY</div>
          <div className="mockup-subtitle">MUSEUM EXHIBITION</div>
          
          <div className="navigation-bar">
            <span className="nav-item">ABOUT US</span>
            <span className="nav-item">HOME/GAMES</span>
            <span className="nav-item">GOTY EXHIBITION</span>
            <span className="nav-item">PROFILES</span>
            <span className="nav-item">STATISTICS AND MORE</span>
            <span className="nav-item">SOURCES</span>
          </div>

          <div className="games-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="game-tile">
                <div className="game-image"></div>
                <div className="game-title">
                  {["REFERRALS", "METROID 2", "XENOBLADE 3", "HADES 2", "DOOM ETERNAL", "NIER AUTOMATA"][index]}
                </div>
                <div className="game-description">Game description text here</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <button className="back-button" onClick={() => navigate('/')}>
        Regresar al Menú
      </button>
    </div>
  );
};

export default Pre8;