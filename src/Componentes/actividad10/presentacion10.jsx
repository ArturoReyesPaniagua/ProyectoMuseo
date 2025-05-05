import React from 'react';

const Actividad10 = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1>ACTIVIDAD 10: CRONOGRAMA DE MONTAJE</h1>
        <h2>Exposición de Videojuegos GOTY</h2>
      </header>

      <main className="content">
        <section className="info-section">
          <div className="info-card">
            <h3>Información General</h3>
            <div className="grid-info">
              <div className="info-item">
                <span className="label">Duración:</span>
                <span className="value">3 semanas</span>
              </div>
              <div className="info-item">
                <span className="label">Periodo:</span>
                <span className="value">Mayo 2025</span>
              </div>
              <div className="info-item">
                <span className="label">Jornada:</span>
                <span className="value">Lunes a Viernes</span>
              </div>
              <div className="info-item">
                <span className="label">Total actividades:</span>
                <span className="value">13 tareas principales</span>
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section">
          <h3>Cronograma Detallado</h3>
          
          <div className="timeline-visual">
            <svg width="100%" height="800" viewBox="0 0 1200 800">
              {/* Estilos - Inline para el componente React */}
              <style>
                {`
                  .title { font-family: Arial; font-size: 24px; font-weight: bold; }
                  .subtitle { font-family: Arial; font-size: 16px; font-style: italic; }
                  .header { font-family: Arial; font-size: 14px; font-weight: bold; fill: white; }
                  .header-bg { fill: #333333; }
                  .task-name { font-family: Arial; font-size: 12px; fill: #333; }
                  .dates { font-family: Arial; font-size: 10px; fill: #666; }
                  .responsible { font-family: Arial; font-size: 11px; fill: #333; font-style: italic; }
                  .day-label { font-family: Arial; font-size: 10px; fill: #666; }
                  .milestone { font-family: Arial; font-size: 11px; font-weight: bold; fill: #333; }
                `}
              </style>
              
              {/* Fondo */}
              <rect width="1200" height="800" fill="#f8f8f8"/>
              
              {/* Título */}
              <text x="600" y="40" textAnchor="middle" className="title">CRONOGRAMA DE MONTAJE - EXPOSICIÓN VIDEOJUEGOS GOTY</text>
              <text x="600" y="65" textAnchor="middle" className="subtitle">Duración del Montaje: 3 semanas - Mayo 2025</text>
              
              {/* Encabezado de la tabla */}
              <g id="table-header">
                <rect x="50" y="80" width="1100" height="30" className="header-bg"/>
                <text x="150" y="100" textAnchor="middle" className="header">ACTIVIDAD</text>
                <text x="300" y="100" textAnchor="middle" className="header">RESPONSABLE</text>
                <text x="400" y="100" textAnchor="middle" className="header">SEMANA 1</text>
                <text x="550" y="100" textAnchor="middle" className="header">SEMANA 2</text>
                <text x="700" y="100" textAnchor="middle" className="header">SEMANA 3</text>
                <text x="850" y="100" textAnchor="middle" className="header">ESTADO</text>
                <text x="1000" y="100" textAnchor="middle" className="header">DURACIÓN</text>
              </g>
              
              {/* Días de la semana */}
              <g id="week-days" fill="#666">
                {/* Semana 1 */}
                <text x="340" y="120" textAnchor="middle" className="day-label">LUN</text>
                <text x="370" y="120" textAnchor="middle" className="day-label">MAR</text>
                <text x="400" y="120" textAnchor="middle" className="day-label">MIÉ</text>
                <text x="430" y="120" textAnchor="middle" className="day-label">JUE</text>
                <text x="460" y="120" textAnchor="middle" className="day-label">VIE</text>
                
                {/* Semana 2 */}
                <text x="490" y="120" textAnchor="middle" className="day-label">LUN</text>
                <text x="520" y="120" textAnchor="middle" className="day-label">MAR</text>
                <text x="550" y="120" textAnchor="middle" className="day-label">MIÉ</text>
                <text x="580" y="120" textAnchor="middle" className="day-label">JUE</text>
                <text x="610" y="120" textAnchor="middle" className="day-label">VIE</text>
                
                {/* Semana 3 */}
                <text x="640" y="120" textAnchor="middle" className="day-label">LUN</text>
                <text x="670" y="120" textAnchor="middle" className="day-label">MAR</text>
                <text x="700" y="120" textAnchor="middle" className="day-label">MIÉ</text>
                <text x="730" y="120" textAnchor="middle" className="day-label">JUE</text>
                <text x="760" y="120" textAnchor="middle" className="day-label">VIE</text>
              </g>
              
              {/* Líneas de división - Simplificadas para React */}
              <g id="grid-lines" stroke="#ddd" strokeWidth="0.5">
                {[...Array(15)].map((_, i) => (
                  <line key={`vertical-${i}`} x1={340 + i * 30} y1="110" x2={340 + i * 30} y2="700" />
                ))}
                {[...Array(18)].map((_, i) => (
                  <line key={`horizontal-${i}`} x1="50" y1={130 + i * 30} x2="1150" y2={130 + i * 30} />
                ))}
              </g>
              
              {/* ACTIVIDADES DE MONTAJE */}
              <text x="70" y="145" className="task-name">Preparación del espacio y marcaje</text>
              <text x="300" y="145" textAnchor="middle" className="responsible">Equipo montaje</text>
              <rect x="340" y="135" width="90" height="15" fill="#4CAF50" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="145" textAnchor="middle" className="dates">INICIO</text>
              <text x="1000" y="145" textAnchor="middle" className="dates">3 días</text>
              
              <text x="70" y="175" className="task-name">Instalación eléctrica y cableado</text>
              <text x="300" y="175" textAnchor="middle" className="responsible">Electricistas</text>
              <rect x="340" y="165" width="150" height="15" fill="#FF9800" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="175" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="175" textAnchor="middle" className="dates">5 días</text>
              
              <text x="70" y="205" className="task-name">Montaje de estructuras base</text>
              <text x="300" y="205" textAnchor="middle" className="responsible">Constructores</text>
              <rect x="400" y="195" width="150" height="15" fill="#2196F3" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="205" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="205" textAnchor="middle" className="dates">5 días</text>
              
              <text x="70" y="235" className="task-name">Instalación de mobiliario base</text>
              <text x="300" y="235" textAnchor="middle" className="responsible">Mobiliario</text>
              <rect x="460" y="225" width="150" height="15" fill="#9C27B0" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="235" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="235" textAnchor="middle" className="dates">5 días</text>
              
              <text x="70" y="265" className="task-name">Instalación de iluminación especializada</text>
              <text x="300" y="265" textAnchor="middle" className="responsible">Iluminadores</text>
              <rect x="520" y="255" width="120" height="15" fill="#FFC107" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="265" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="265" textAnchor="middle" className="dates">4 días</text>
              
              <text x="70" y="295" className="task-name">Instalación de vitrinas y seguridad</text>
              <text x="300" y="295" textAnchor="middle" className="responsible">Vitrinas/Seguridad</text>
              <rect x="460" y="285" width="180" height="15" fill="#795548" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="295" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="295" textAnchor="middle" className="dates">6 días</text>
              
              {/* Primera revisión */}
              <text x="640" y="320" textAnchor="middle" className="milestone">REVISIÓN DE INFRAESTRUCTURA ▼</text>
              <circle cx="640" cy="325" r="5" fill="#F44336" stroke="#333"/>
              
              {/* Segunda semana de actividades */}
              <text x="70" y="355" className="task-name">Instalación de sistemas multimedia</text>
              <text x="300" y="355" textAnchor="middle" className="responsible">Técnicos AV</text>
              <rect x="580" y="345" width="180" height="15" fill="#607D8B" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="355" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="355" textAnchor="middle" className="dates">6 días</text>
              
              <text x="70" y="385" className="task-name">Instalación de obra gráfica</text>
              <text x="300" y="385" textAnchor="middle" className="responsible">Gráfica</text>
              <rect x="640" y="375" width="120" height="15" fill="#009688" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="385" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="385" textAnchor="middle" className="dates">4 días</text>
              
              <text x="70" y="415" className="task-name">Colocación de objetos y colecciones</text>
              <text x="300" y="415" textAnchor="middle" className="responsible">Curaduría</text>
              <rect x="670" y="405" width="90" height="15" fill="#3F51B5" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="415" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="415" textAnchor="middle" className="dates">3 días</text>
              
              <text x="70" y="445" className="task-name">Configuración de sistemas interactivos</text>
              <text x="300" y="445" textAnchor="middle" className="responsible">Desarrolladores</text>
              <rect x="640" y="435" width="150" height="15" fill="#673AB7" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="445" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="445" textAnchor="middle" className="dates">5 días</text>
              
              {/* Segunda revisión */}
              <text x="730" y="470" textAnchor="middle" className="milestone">REVISIÓN GENERAL ▼</text>
              <circle cx="730" cy="475" r="5" fill="#F44336" stroke="#333"/>
              
              {/* Tercera semana final */}
              <text x="70" y="505" className="task-name">Pruebas técnicas y ajustes</text>
              <text x="300" y="505" textAnchor="middle" className="responsible">Todo el equipo</text>
              <rect x="700" y="495" width="90" height="15" fill="#E91E63" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="505" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="505" textAnchor="middle" className="dates">3 días</text>
              
              <text x="70" y="535" className="task-name">Limpieza final y toques finales</text>
              <text x="300" y="535" textAnchor="middle" className="responsible">Limpieza</text>
              <rect x="730" y="525" width="60" height="15" fill="#8BC34A" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="535" textAnchor="middle" className="dates">PROCESO</text>
              <text x="1000" y="535" textAnchor="middle" className="dates">2 días</text>
              
              <text x="70" y="565" className="task-name">Ensayo general y capacitación</text>
              <text x="300" y="565" textAnchor="middle" className="responsible">Gerencia</text>
              <rect x="760" y="555" width="30" height="15" fill="#03A9F4" stroke="#333" rx="2" ry="2"/>
              <text x="850" y="565" textAnchor="middle" className="dates">CRÍTICO</text>
              <text x="1000" y="565" textAnchor="middle" className="dates">1 día</text>
              
              {/* Inauguración */}
              <text x="760" y="595" textAnchor="middle" className="milestone">INAUGURACIÓN ✓</text>
              <rect x="745" y="585" width="30" height="15" fill="#4CAF50" stroke="#333" rx="2" ry="2"/>
              <text x="760" y="595" textAnchor="middle" style={{fill:'white', fontWeight:'bold'}}>✓</text>
              
              {/* Leyenda */}
              <g id="legend">
                <rect x="50" y="720" width="1100" height="60" fill="white" stroke="#333" strokeWidth="1"/>
                <text x="600" y="740" textAnchor="middle" className="header">LEYENDA DE ESTADOS</text>
                
                <rect x="80" y="750" width="15" height="10" fill="#4CAF50" stroke="#333"/>
                <text x="100" y="758" className="dates">INICIO - Preparación inicial</text>
                
                <rect x="250" y="750" width="15" height="10" fill="#2196F3" stroke="#333"/>
                <text x="270" y="758" className="dates">PROCESO - En ejecución</text>
                
                <rect x="420" y="750" width="15" height="10" fill="#F44336" stroke="#333"/>
                <text x="440" y="758" className="dates">CRÍTICO - Actividad clave</text>
                
                <rect x="580" y="750" width="15" height="10" fill="#FFC107" stroke="#333"/>
                <text x="600" y="758" className="dates">REVISIÓN - Control de calidad</text>
                
                <circle cx="750" cy="755" r="5" fill="#F44336" stroke="#333"/>
                <text x="760" y="758" className="dates">HITO - Punto de control</text>
                
                <rect x="900" y="750" width="15" height="10" fill="#03A9F4" stroke="#333"/>
                <text x="920" y="758" className="dates">FINALIZACIÓN - Última fase</text>
              </g>
            </svg>
          </div>
        </section>

        <section className="tasks-section">
          <h3>Detalle de Tareas Principales</h3>
          <div className="tasks-grid">
            <div className="task-card">
              <h4>Preparación del Espacio</h4>
              <p>Marcaje de áreas, señalización preliminar y coordinación de accesos.</p>
              <span className="tag-inicio">INICIO</span>
            </div>
            <div className="task-card">
              <h4>Instalación Eléctrica</h4>
              <p>Cableado completo, puntos de luz y enchufes especializados.</p>
              <span className="tag-proceso">PROCESO</span>
            </div>
            <div className="task-card">
              <h4>Estructuras Base</h4>
              <p>Montaje de paredes, niveles y estructuras de soporte.</p>
              <span className="tag-proceso">PROCESO</span>
            </div>
            <div className="task-card">
              <h4>Mobiliario</h4>
              <p>Colocación de vitrinas, estaciones de juego y elementos móviles.</p>
              <span className="tag-proceso">PROCESO</span>
            </div>
            <div className="task-card">
              <h4>Iluminación Especializada</h4>
              <p>Instalación de focos direccionales, efectos especiales y tiras LED.</p>
              <span className="tag-revision">REVISIÓN</span>
            </div>
            <div className="task-card">
              <h4>Sistemas Multimedia</h4>
              <p>Pantallas, audio, sistemas interactivos y conectividad.</p>
              <span className="tag-proceso">PROCESO</span>
            </div>
            <div className="task-card">
              <h4>Obra Gráfica</h4>
              <p>Instalación de vinilos, impresiones y elementos visuales.</p>
              <span className="tag-proceso">PROCESO</span>
            </div>
            <div className="task-card">
              <h4>Colecciones</h4>
              <p>Colocación de videojuegos originales y elementos coleccionables.</p>
              <span className="tag-proceso">PROCESO</span>
            </div>
            <div className="task-card">
              <h4>Sistemas Interactivos</h4>
              <p>Configuración de software, calibración de pantallas táctiles.</p>
              <span className="tag-proceso">PROCESO</span>
            </div>
            <div className="task-card">
              <h4>Pruebas Técnicas</h4>
              <p>Verificación de funcionamiento, debugging y ajustes finales.</p>
              <span className="tag-critico">CRÍTICO</span>
            </div>
            <div className="task-card">
              <h4>Limpieza Final</h4>
              <p>Acondicionamiento final del espacio, retoque de detalles.</p>
              <span className="tag-finalizacion">FINALIZACIÓN</span>
            </div>
            <div className="task-card">
              <h4>Ensayo General</h4>
              <p>Simulación completa de inauguración y capacitación del personal.</p>
              <span className="tag-critico">CRÍTICO</span>
            </div>
          </div>
        </section>

        <section className="notes-section">
          <h3>Notas Importantes</h3>
          <div className="notes-list">
            <div className="note-item important">
              <span className="icon">⚠️</span>
              <p>Las tareas críticas requieren supervisión constante de la dirección.</p>
            </div>
            <div className="note-item">
              <span className="icon">🔄</span>
              <p>Se realizarán revisiones al final de cada semana para evaluar el progreso.</p>
            </div>
            <div className="note-item">
              <span className="icon">⏱️</span>
              <p>El cronograma incluye márgenes de 10% para imprevistos.</p>
            </div>
            <div className="note-item">
              <span className="icon">👥</span>
              <p>Coordinación diaria entre equipos para evitar interferencias.</p>
            </div>
          </div>
        </section>
      </main>

      <style>
        {`
          .app-container {
            font-family: 'Arial', sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
            min-height: 100vh;
          }

          .header {
            text-align: center;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }

          .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }

          .header h2 {
            font-size: 1.8rem;
            font-weight: normal;
            opacity: 0.9;
          }

          .content {
            background: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .info-section {
            margin-bottom: 40px;
          }

          .info-card {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #2a5298;
          }

          .info-card h3 {
            color: #1e3c72;
            margin-bottom: 15px;
            font-size: 1.5rem;
          }

          .grid-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .info-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .label {
            font-weight: bold;
            color: #555;
          }

          .value {
            color: #333;
          }

          .timeline-section {
            margin-bottom: 40px;
          }

          .timeline-section h3 {
            color: #1e3c72;
            margin-bottom: 20px;
            font-size: 1.5rem;
          }

          .timeline-visual {
            background: white;
            border-radius: 8px;
            overflow-x: auto;
            padding: 10px;
            border: 1px solid #ddd;
          }

          .tasks-section {
            margin-bottom: 40px;
          }

          .tasks-section h3 {
            color: #1e3c72;
            margin-bottom: 20px;
            font-size: 1.5rem;
          }

          .tasks-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
          }

          .task-card {
            background: white;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }

          .task-card:hover {
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            transform: translateY(-2px);
          }

          .task-card h4 {
            color: #1e3c72;
            margin-bottom: 10px;
            font-size: 1.2rem;
          }

          .task-card p {
            color: #666;
            margin-bottom: 10px;
            line-height: 1.5;
          }

          .tag-inicio {
            display: inline-block;
            background: #4CAF50;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: bold;
          }

          .tag-proceso {
            display: inline-block;
            background: #2196F3;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: bold;
          }

          .tag-critico {
            display: inline-block;
            background: #F44336;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: bold;
          }

          .tag-revision {
            display: inline-block;
            background: #FFC107;
            color: #333;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: bold;
          }

          .tag-finalizacion {
            display: inline-block;
            background: #03A9F4;
            color: white;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.85rem;
            font-weight: bold;
          }

          .notes-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 25px;
            border-left: 4px solid #2a5298;
          }

          .notes-section h3 {
            color: #1e3c72;
            margin-bottom: 20px;
            font-size: 1.5rem;
          }

          .notes-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .note-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }

          .note-item.important {
            border-left: 4px solid #F44336;
          }

          .note-item .icon {
            font-size: 1.5rem;
            line-height: 1;
          }

          .note-item p {
            margin: 0;
            color: #555;
            line-height: 1.5;
          }

          @media (max-width: 768px) {
            .header h1 {
              font-size: 1.8rem;
            }
            .header h2 {
              font-size: 1.3rem;
            }
            .app-container {
              padding: 10px;
            }
            .content {
              padding: 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Actividad10;