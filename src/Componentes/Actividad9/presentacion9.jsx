/* src/Componentes/Actividad9/presentacion9.jsx */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./pre9.css";

const Pre9 = () => {
  const navigate = useNavigate();

  return (
    <div className="container9">
      <div className="presentation-box9">
        <h1>ACTIVIDAD 9 - CRONOGRAMA DEL PROYECTO</h1>
        
        <p style={{ marginBottom: '30px', fontSize: '1.2rem' }}>
          Cronograma de desarrollo de la Exposición de Videojuegos GOTY
        </p>

        <div className="cronograma-container">
          <div className="cronograma-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
              {/* Estilos generales */}
              <style>
                {`
                  text {
                    font-family: Arial, sans-serif;
                  }
                  .title {
                    font-size: 24px;
                    font-weight: bold;
                  }
                  .subtitle {
                    font-size: 16px;
                    font-style: italic;
                  }
                  .header {
                    font-size: 14px;
                    font-weight: bold;
                    fill: white;
                  }
                  .header-bg {
                    fill: #333333;
                  }
                  .task-name {
                    font-size: 12px;
                    fill: #333;
                  }
                  .dates {
                    font-size: 10px;
                    fill: #666;
                  }
                  .milestone {
                    font-size: 11px;
                    font-weight: bold;
                    fill: #333;
                  }
                  .responsible {
                    font-size: 10px;
                    fill: #333;
                    font-style: italic;
                  }
                  .section-title {
                    font-size: 14px;
                    font-weight: bold;
                    fill: #333;
                  }
                `}
              </style>
              
              {/* Fondo */}
              <rect width="1200" height="800" fill="#f8f8f8"/>
              
              {/* Título */}
              <text x="600" y="40" textAnchor="middle" className="title">CRONOGRAMA DEL PROYECTO: EXPOSICIÓN DE VIDEOJUEGOS GOTY</text>
              <text x="600" y="65" textAnchor="middle" className="subtitle">Duración Total: 6 meses - Enero a Junio 2025</text>
              
              {/* Encabezados y marco */}
              <g id="table-header">
                <rect x="50" y="80" width="1100" height="30" className="header-bg"/>
                <text x="150" y="100" textAnchor="middle" className="header">ACTIVIDAD</text>
                <text x="280" y="100" textAnchor="middle" className="header">RESPONSABLE</text>
                <text x="400" y="100" textAnchor="middle" className="header">ENERO</text>
                <text x="525" y="100" textAnchor="middle" className="header">FEBRERO</text>
                <text x="650" y="100" textAnchor="middle" className="header">MARZO</text>
                <text x="775" y="100" textAnchor="middle" className="header">ABRIL</text>
                <text x="900" y="100" textAnchor="middle" className="header">MAYO</text>
                <text x="1025" y="100" textAnchor="middle" className="header">JUNIO</text>
                <text x="1130" y="100" textAnchor="middle" className="header">DURACIÓN</text>
              </g>
              
              {/* Líneas de división semanas */}
              <g id="week-lines" stroke="#ddd" strokeWidth="1">
                {/* Enero - Líneas semanas */}
                <line x1="350" y1="80" x2="350" y2="720" />
                <line x1="375" y1="80" x2="375" y2="720" />
                <line x1="400" y1="80" x2="400" y2="720" />
                <line x1="425" y1="80" x2="425" y2="720" />
                <line x1="450" y1="80" x2="450" y2="720" />
                
                {/* Febrero - Líneas semanas */}
                <line x1="475" y1="80" x2="475" y2="720" />
                <line x1="500" y1="80" x2="500" y2="720" />
                <line x1="525" y1="80" x2="525" y2="720" />
                <line x1="550" y1="80" x2="550" y2="720" />
                <line x1="575" y1="80" x2="575" y2="720" />
                
                {/* Marzo - Líneas semanas */}
                <line x1="600" y1="80" x2="600" y2="720" />
                <line x1="625" y1="80" x2="625" y2="720" />
                <line x1="650" y1="80" x2="650" y2="720" />
                <line x1="675" y1="80" x2="675" y2="720" />
                <line x1="700" y1="80" x2="700" y2="720" />
                
                {/* Abril - Líneas semanas */}
                <line x1="725" y1="80" x2="725" y2="720" />
                <line x1="750" y1="80" x2="750" y2="720" />
                <line x1="775" y1="80" x2="775" y2="720" />
                <line x1="800" y1="80" x2="800" y2="720" />
                <line x1="825" y1="80" x2="825" y2="720" />
                
                {/* Mayo - Líneas semanas */}
                <line x1="850" y1="80" x2="850" y2="720" />
                <line x1="875" y1="80" x2="875" y2="720" />
                <line x1="900" y1="80" x2="900" y2="720" />
                <line x1="925" y1="80" x2="925" y2="720" />
                <line x1="950" y1="80" x2="950" y2="720" />
                
                {/* Junio - Líneas semanas */}
                <line x1="975" y1="80" x2="975" y2="720" />
                <line x1="1000" y1="80" x2="1000" y2="720" />
                <line x1="1025" y1="80" x2="1025" y2="720" />
                <line x1="1050" y1="80" x2="1050" y2="720" />
                <line x1="1075" y1="80" x2="1075" y2="720" />
                <line x1="1100" y1="80" x2="1100" y2="720" />
              </g>
              
              {/* Líneas horizontales de división */}
              <g id="horizontal-lines" stroke="#ddd" strokeWidth="1">
                <line x1="50" y1="130" x2="1150" y2="130" />
                <line x1="50" y1="160" x2="1150" y2="160" />
                <line x1="50" y1="190" x2="1150" y2="190" />
                <line x1="50" y1="220" x2="1150" y2="220" />
                <line x1="50" y1="250" x2="1150" y2="250" />
                <line x1="50" y1="280" x2="1150" y2="280" />
                <line x1="50" y1="310" x2="1150" y2="310" />
                <line x1="50" y1="340" x2="1150" y2="340" />
                <line x1="50" y1="370" x2="1150" y2="370" />
                <line x1="50" y1="400" x2="1150" y2="400" />
                <line x1="50" y1="430" x2="1150" y2="430" />
                <line x1="50" y1="460" x2="1150" y2="460" />
                <line x1="50" y1="490" x2="1150" y2="490" />
                <line x1="50" y1="520" x2="1150" y2="520" />
                <line x1="50" y1="550" x2="1150" y2="550" />
                <line x1="50" y1="580" x2="1150" y2="580" />
                <line x1="50" y1="610" x2="1150" y2="610" />
                <line x1="50" y1="640" x2="1150" y2="640" />
                <line x1="50" y1="670" x2="1150" y2="670" />
                <line x1="50" y1="700" x2="1150" y2="700" />
              </g>
              
              {/* ===================== FASES DEL PROYECTO ===================== */}
              
              {/* FASE 1: DISEÑO Y PLANIFICACIÓN */}
              <text x="80" y="120" className="section-title">FASE 1: DISEÑO Y PLANIFICACIÓN</text>
              
              {/* Brief y Presentación del Proyecto */}
              <text x="70" y="145" className="task-name">Brief del proyecto</text>
              <text x="280" y="145" textAnchor="middle" className="responsible">Equipo Curatorial</text>
              <rect x="350" y="135" width="50" height="15" fill="#ffcd56" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="145" textAnchor="middle" className="dates">2 semanas</text>
              
              {/* Guión museológico y museográfico */}
              <text x="70" y="175" className="task-name">Guión museológico y museográfico</text>
              <text x="280" y="175" textAnchor="middle" className="responsible">Equipo Curatorial/Diseño</text>
              <rect x="400" y="165" width="75" height="15" fill="#ffcd56" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="175" textAnchor="middle" className="dates">3 semanas</text>
              
              {/* Cronograma y plan de trabajo */}
              <text x="70" y="205" className="task-name">Cronograma y plan de trabajo</text>
              <text x="280" y="205" textAnchor="middle" className="responsible">Gerente de Proyecto</text>
              <rect x="425" y="195" width="50" height="15" fill="#ffcd56" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="205" textAnchor="middle" className="dates">2 semanas</text>
              
              {/* Presupuesto preliminar */}
              <text x="70" y="235" className="task-name">Presupuesto preliminar</text>
              <text x="280" y="235" textAnchor="middle" className="responsible">Administración</text>
              <rect x="475" y="225" width="50" height="15" fill="#ffcd56" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="235" textAnchor="middle" className="dates">2 semanas</text>
              
              {/* Primera revisión/hito */}
              <text x="525" y="265" textAnchor="middle" className="milestone">PRIMERA REVISIÓN DE DISEÑO ▼</text>
              <circle cx="525" cy="270" r="5" fill="#ff6384" stroke="#333"/>
              
              {/* FASE 2: DESARROLLO DE CONTENIDO */}
              <text x="80" y="295" className="section-title">FASE 2: DESARROLLO DE CONTENIDO</text>
              
              {/* Investigación y documentación */}
              <text x="70" y="325" className="task-name">Investigación y documentación de videojuegos GOTY</text>
              <text x="280" y="325" textAnchor="middle" className="responsible">Equipo Investigación</text>
              <rect x="525" y="315" width="100" height="15" fill="#36a2eb" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="325" textAnchor="middle" className="dates">4 semanas</text>
              
              {/* Redacción de textos finales */}
              <text x="70" y="355" className="task-name">Redacción de textos finales</text>
              <text x="280" y="355" textAnchor="middle" className="responsible">Redactores</text>
              <rect x="625" y="345" width="75" height="15" fill="#36a2eb" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="355" textAnchor="middle" className="dates">3 semanas</text>
              
              {/* Documento maestro */}
              <text x="70" y="385" className="task-name">Documento maestro (especificaciones completas)</text>
              <text x="280" y="385" textAnchor="middle" className="responsible">Diseño Museográfico</text>
              <rect x="675" y="375" width="50" height="15" fill="#36a2eb" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="385" textAnchor="middle" className="dates">2 semanas</text>
              
              {/* Ficha de contenidos */}
              <text x="70" y="415" className="task-name">Ficha de contenidos</text>
              <text x="280" y="415" textAnchor="middle" className="responsible">Equipo Curatorial</text>
              <rect x="700" y="405" width="50" height="15" fill="#36a2eb" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="415" textAnchor="middle" className="dates">2 semanas</text>
              
              {/* Segunda revisión/hito */}
              <text x="750" y="445" textAnchor="middle" className="milestone">APROBACIÓN DE CONTENIDOS ▼</text>
              <circle cx="750" cy="450" r="5" fill="#ff6384" stroke="#333"/>
              
              {/* FASE 3: DISEÑO MUSEOGRÁFICO */}
              <text x="80" y="475" className="section-title">FASE 3: DISEÑO MUSEOGRÁFICO</text>
              
              {/* Diseño preliminar y ejecutivo */}
              <text x="70" y="505" className="task-name">Diseño preliminar y ejecutivo</text>
              <text x="280" y="505" textAnchor="middle" className="responsible">Equipo Diseño</text>
              <rect x="750" y="495" width="75" height="15" fill="#4bc0c0" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="505" textAnchor="middle" className="dates">3 semanas</text>
              
              {/* Diseño de gráficos y señalización */}
              <text x="70" y="535" className="task-name">Diseño de gráficos y señalización</text>
              <text x="280" y="535" textAnchor="middle" className="responsible">Diseño Gráfico</text>
              <rect x="800" y="525" width="75" height="15" fill="#4bc0c0" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="535" textAnchor="middle" className="dates">3 semanas</text>
              
              {/* Diseño de planos e iluminación */}
              <text x="70" y="565" className="task-name">Diseño de planos e iluminación</text>
              <text x="280" y="565" textAnchor="middle" className="responsible">Arquitectura/Iluminación</text>
              <rect x="850" y="555" width="75" height="15" fill="#4bc0c0" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="565" textAnchor="middle" className="dates">3 semanas</text>
              
              {/* Tercera revisión/hito */}
              <text x="925" y="595" textAnchor="middle" className="milestone">APROBACIÓN DISEÑO FINAL ▼</text>
              <circle cx="925" cy="600" r="5" fill="#ff6384" stroke="#333"/>
              
              {/* FASE 4: PRODUCCIÓN Y MONTAJE */}
              <text x="80" y="625" className="section-title">FASE 4: PRODUCCIÓN Y MONTAJE</text>
              
              {/* Producción de gráficos y mobiliario */}
              <text x="70" y="655" className="task-name">Producción de gráficos y mobiliario</text>
              <text x="280" y="655" textAnchor="middle" className="responsible">Proveedores</text>
              <rect x="925" y="645" width="100" height="15" fill="#9966ff" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="655" textAnchor="middle" className="dates">4 semanas</text>
              
              {/* Montaje de la exposición */}
              <text x="70" y="685" className="task-name">Montaje de la exposición</text>
              <text x="280" y="685" textAnchor="middle" className="responsible">Equipo Montaje</text>
              <rect x="1000" y="675" width="75" height="15" fill="#9966ff" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="685" textAnchor="middle" className="dates">3 semanas</text>
              
              {/* Inauguración */}
              <text x="70" y="715" className="task-name">Pruebas, ajustes e inauguración</text>
              <text x="280" y="715" textAnchor="middle" className="responsible">Todo el equipo</text>
              <rect x="1050" y="705" width="50" height="15" fill="#ff6384" stroke="#666" rx="2" ry="2"/>
              <text x="1130" y="715" textAnchor="middle" className="dates">2 semanas</text>
              
              {/* Línea de tiempo principal con leyenda */}
              <g id="timeline-scale">
                <line x1="350" y1="750" x2="1100" y2="750" stroke="#333" strokeWidth="2"/>
                <text x="350" y="745" textAnchor="middle" className="dates">ENE 1</text>
                <text x="475" y="745" textAnchor="middle" className="dates">FEB 1</text>
                <text x="600" y="745" textAnchor="middle" className="dates">MAR 1</text>
                <text x="725" y="745" textAnchor="middle" className="dates">ABR 1</text>
                <text x="850" y="745" textAnchor="middle" className="dates">MAY 1</text>
                <text x="975" y="745" textAnchor="middle" className="dates">JUN 1</text>
                <text x="1100" y="745" textAnchor="middle" className="dates">JUL 1</text>
              </g>
              
              {/* Leyenda */}
              <g id="legend">
                <rect x="50" y="730" width="15" height="10" fill="#ffcd56" stroke="#666"/>
                <text x="70" y="738" className="dates">Planificación</text>
                
                <rect x="150" y="730" width="15" height="10" fill="#36a2eb" stroke="#666"/>
                <text x="170" y="738" className="dates">Contenido</text>
                
                <rect x="250" y="730" width="15" height="10" fill="#4bc0c0" stroke="#666"/>
                <text x="270" y="738" className="dates">Diseño</text>
                
                <rect x="350" y="730" width="15" height="10" fill="#9966ff" stroke="#666"/>
                <text x="370" y="738" className="dates">Producción</text>
                
                <rect x="450" y="730" width="15" height="10" fill="#ff6384" stroke="#666"/>
                <text x="470" y="738" className="dates">Inauguración</text>
                
                <circle cx="540" cy="735" r="5" fill="#ff6384" stroke="#333"/>
                <text x="550" y="738" className="dates">Hito</text>
              </g>
            </svg>
          </div>
        </div>

        <p style={{ marginTop: '30px', fontSize: '1.1rem', color: '#f0f7ff' }}>
          Este cronograma muestra las 4 fases principales del proyecto y sus hitos críticos de revisión.
        </p>
      </div>
      
      <button className="back-button" onClick={() => navigate('/')}>
        Regresar al Menú
      </button>
    </div>
  );
};

export default Pre9;