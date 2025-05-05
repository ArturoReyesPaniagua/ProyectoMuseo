/* src/Componentes/Actividad11/presentacion11.jsx */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pre11.css";

const slides = [
  {
    title: "DOCUMENTO MAESTRO",
    content: (
      <div>
        <h2>Exposición: "Evolución de los Videojuegos GOTY"</h2>
        <p style={{ fontStyle: 'italic', marginBottom: '20px' }}>
          Documento rector que establece los parámetros técnicos y museográficos para la exhibición
        </p>
      </div>
    )
  },
  {
    title: "INFORMACIÓN GENERAL",
    content: (
      <div className="expo-info">
        <div className="info-card">
          <p><span className="info-label">Nombre de la exposición:</span> Evolución de los Videojuegos GOTY</p>
        </div>
        <div className="info-card">
          <p><span className="info-label">Duración:</span> 6 meses (Enero a Junio 2025)</p>
        </div>
        <div className="info-card">
          <p><span className="info-label">Ubicación:</span> Sala principal de exposiciones temporales</p>
        </div>
        <div className="info-card">
          <p><span className="info-label">Dimensiones totales:</span> 40m x 25m (1000 m²)</p>
        </div>
        <div className="info-card">
          <p><span className="info-label">Responsable Contenidos:</span> Equipo Curatorial</p>
        </div>
        <div className="info-card">
          <p><span className="info-label">Responsable Museografía:</span> Equipo de Diseño</p>
        </div>
      </div>
    )
  },
  {
    title: "INVENTARIO - ENTRADA",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Panel bienvenida</td>
              <td>Gráfica</td>
              <td>1</td>
              <td>Impresión en vinilo sobre PVC 5mm</td>
              <td>2m x 1.5m</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Panel interactivo línea del tiempo</td>
              <td>Multimedia</td>
              <td>1</td>
              <td>Pantalla táctil 4K con software personalizado</td>
              <td>55"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Iluminación entrada</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Focos direccionales (D1 y D2)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Señalización</td>
              <td>Gráfica</td>
              <td>2</td>
              <td>Impresión sobre forex 3mm</td>
              <td>30cm x 20cm</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Viniles de piso</td>
              <td>Gráfica</td>
              <td>4</td>
              <td>Vinilo antideslizante impreso</td>
              <td>1m x 1m</td>
              <td>Diseño Gráfico</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "INVENTARIO - SALA 1: LOS PIONEROS",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vitrina primer GOTY</td>
              <td>Mobiliario</td>
              <td>1</td>
              <td>Vitrina museográfica con iluminación interna, cristal antirreflejante</td>
              <td>1.2m x 0.8m x 1m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Videojuego físico</td>
              <td>Objeto</td>
              <td>1</td>
              <td>Videojuego original en caja</td>
              <td>-</td>
              <td>Curaduría</td>
            </tr>
            <tr>
              <td>Pantalla multimedia</td>
              <td>Multimedia</td>
              <td>1</td>
              <td>Monitor 4K con reproductor</td>
              <td>42"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Panel informativo</td>
              <td>Gráfica</td>
              <td>1</td>
              <td>Impresión en vinilo sobre PVC 5mm</td>
              <td>1.5m x 1m</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Focos direccionales</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Focos direccionales (D3 y D4)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Iluminación ambiental</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Iluminación general (A1)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Efectos especiales</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Proyección retro-iluminada (E1)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Audio ambiental</td>
              <td>Audiovisual</td>
              <td>1</td>
              <td>Sistema de audio direccional</td>
              <td>-</td>
              <td>Audiovisual</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "INVENTARIO - SALA 2: LA EVOLUCIÓN",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vitrinas videojuegos</td>
              <td>Mobiliario</td>
              <td>2</td>
              <td>Vitrinas museográficas con iluminación interna</td>
              <td>1.2m x 0.8m x 1m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Videojuegos físicos</td>
              <td>Objeto</td>
              <td>2</td>
              <td>Videojuegos originales en caja</td>
              <td>-</td>
              <td>Curaduría</td>
            </tr>
            <tr>
              <td>Pantalla multimedia</td>
              <td>Multimedia</td>
              <td>1</td>
              <td>Monitor 4K con reproductor</td>
              <td>50"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Paneles informativos</td>
              <td>Gráfica</td>
              <td>2</td>
              <td>Impresión en vinilo sobre PVC 5mm</td>
              <td>1.5m x 1m</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Focos direccionales</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Focos direccionales (D5 y D6)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Iluminación ambiental</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Iluminación general (A2)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Efectos especiales</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Proyección interactiva (E2)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Audio ambiental</td>
              <td>Audiovisual</td>
              <td>1</td>
              <td>Sistema de audio direccional</td>
              <td>-</td>
              <td>Audiovisual</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "INVENTARIO - SALAS 3+",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vitrinas videojuegos</td>
              <td>Mobiliario</td>
              <td>3</td>
              <td>Vitrinas museográficas con iluminación interna</td>
              <td>1m x 0.6m x 0.8m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Videojuegos físicos</td>
              <td>Objeto</td>
              <td>3</td>
              <td>Videojuegos originales en caja</td>
              <td>-</td>
              <td>Curaduría</td>
            </tr>
            <tr>
              <td>Pantallas interactivas</td>
              <td>Multimedia</td>
              <td>2</td>
              <td>Pantallas táctiles con información adicional</td>
              <td>32"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Paneles informativos</td>
              <td>Gráfica</td>
              <td>3</td>
              <td>Impresión en vinilo sobre PVC 5mm</td>
              <td>1.2m x 0.8m</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Focos direccionales</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Focos direccionales (D13 y D14)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Iluminación ambiental</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Iluminación general (A3)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Audio ambiental</td>
              <td>Audiovisual</td>
              <td>1</td>
              <td>Sistema de audio direccional</td>
              <td>-</td>
              <td>Audiovisual</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "INVENTARIO - SALA DE JUEGOS",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estaciones de juego</td>
              <td>Mobiliario</td>
              <td>6</td>
              <td>Estructuras con consolas y monitores instalados</td>
              <td>1.2m x 0.8m x 1.2m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Consolas de videojuegos</td>
              <td>Equipo</td>
              <td>6</td>
              <td>Consolas contemporáneas con juegos GOTY preinstalados</td>
              <td>-</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Monitores</td>
              <td>Equipo</td>
              <td>6</td>
              <td>Monitores 4K para juegos</td>
              <td>32"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Controles</td>
              <td>Equipo</td>
              <td>12</td>
              <td>Controles originales para cada consola</td>
              <td>-</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Asientos</td>
              <td>Mobiliario</td>
              <td>12</td>
              <td>Puffs ergonómicos</td>
              <td>50cm x 50cm x 40cm</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Focos direccionales</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Focos direccionales (D11 y D12)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Iluminación ambiental</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Iluminación general regulable (A4)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Audio</td>
              <td>Audiovisual</td>
              <td>6</td>
              <td>Auriculares inalámbricos</td>
              <td>-</td>
              <td>Audiovisual</td>
            </tr>
            <tr>
              <td>Paneles instructivos</td>
              <td>Gráfica</td>
              <td>6</td>
              <td>Impresión en acrílico</td>
              <td>40cm x 30cm</td>
              <td>Diseño Gráfico</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    title: "INVENTARIO - SALA DE CONVIVENCIA",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Área de cafetería</td>
              <td>Mobiliario</td>
              <td>1</td>
              <td>Mostrador con equipamiento</td>
              <td>3m x 1m x 1.2m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Mesas</td>
              <td>Mobiliario</td>
              <td>6</td>
              <td>Mesas redondas</td>
              <td>80cm diámetro</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Sillas</td>
              <td>Mobiliario</td>
              <td>24</td>
              <td>Sillas ergonómicas</td>
              <td>-</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Área de tienda</td>
              <td>Mobiliario</td>
              <td>1</td>
              <td>Mobiliario expositivo para merchandising</td>
              <td>4m x 2m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Panel de eventos</td>
              <td>Gráfica</td>
              <td>1</td>
              <td>Panel informativo con programación</td>
              <td>1.5m x 1m</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Focos direccionales</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Focos direccionales (D9 y D10)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Iluminación ambiental</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Iluminación general (A5)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Sistema de sonido</td>
              <td>Audiovisual</td>
              <td>1</td>
              <td>Altavoces ambientales</td>
              <td>-</td>
              <td>Audiovisual</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
// Zona Clímax: GOTY Reciente
{
    title: "INVENTARIO - ZONA CLÍMAX: GOTY RECIENTE",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vitrina central</td>
              <td>Mobiliario</td>
              <td>1</td>
              <td>Vitrina premium 360° con iluminación especializada</td>
              <td>1.5m x 1.5m x 2m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Videojuego GOTY actual</td>
              <td>Objeto</td>
              <td>1</td>
              <td>Edición especial del juego actual</td>
              <td>-</td>
              <td>Curaduría</td>
            </tr>
            <tr>
              <td>Pantalla principal</td>
              <td>Multimedia</td>
              <td>1</td>
              <td>Pantalla LED 4K</td>
              <td>85"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Pantallas táctiles</td>
              <td>Multimedia</td>
              <td>3</td>
              <td>Pantallas interactivas: votación, información y compartir</td>
              <td>32"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Estación demo jugable</td>
              <td>Equipo</td>
              <td>2</td>
              <td>Consolas con demo del juego GOTY actual</td>
              <td>-</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Paneles informativos</td>
              <td>Gráfica</td>
              <td>3</td>
              <td>Impresión en vinilo sobre PVC 5mm</td>
              <td>2m x 1.2m</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Focos direccionales</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Focos direccionales (D7 y D8)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Iluminación ambiental</td>
              <td>Iluminación</td>
              <td>2</td>
              <td>Iluminación general regulable (A6 y A7)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Efectos especiales</td>
              <td>Iluminación</td>
              <td>3</td>
              <td>Iluminación interactiva y dinámica (E3, E4, E5)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Tiras LED</td>
              <td>Iluminación</td>
              <td>4</td>
              <td>Tiras LED perimetrales (L2, L3, L4, L5)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
            <tr>
              <td>Sistema de audio</td>
              <td>Audiovisual</td>
              <td>1</td>
              <td>Sistema de sonido envolvente</td>
              <td>-</td>
              <td>Audiovisual</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  
  // Salida/Tienda
  {
    title: "INVENTARIO - SALIDA / TIENDA",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Tipo</th>
              <th>Cant.</th>
              <th>Material/Especificaciones</th>
              <th>Dimensiones</th>
              <th>Responsable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estanterías tienda</td>
              <td>Mobiliario</td>
              <td>4</td>
              <td>Estanterías para merchandising</td>
              <td>1.5m x 0.5m x 2m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Mostrador de caja</td>
              <td>Mobiliario</td>
              <td>1</td>
              <td>Mostrador con computadora y sistema de pago</td>
              <td>2m x 0.8m x 1m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Vitrinas productos</td>
              <td>Mobiliario</td>
              <td>2</td>
              <td>Vitrinas para productos premium</td>
              <td>1m x 0.5m x 1.8m</td>
              <td>Mobiliario</td>
            </tr>
            <tr>
              <td>Pantalla promocional</td>
              <td>Multimedia</td>
              <td>1</td>
              <td>Monitor para promociones</td>
              <td>42"</td>
              <td>Multimedia</td>
            </tr>
            <tr>
              <td>Señalización</td>
              <td>Gráfica</td>
              <td>2</td>
              <td>Señalización de salida</td>
              <td>40cm x 30cm</td>
              <td>Diseño Gráfico</td>
            </tr>
            <tr>
              <td>Focos direccionales</td>
              <td>Iluminación</td>
              <td>1</td>
              <td>Foco direccional (D15)</td>
              <td>-</td>
              <td>Iluminación</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  
  // Especificaciones técnicas - Iluminación
  {
    title: "ESPECIFICACIONES TÉCNICAS - ILUMINACIÓN",
    content: (
      <div>
        <h3>Focos Direccionales (D1-D15)</h3>
        <ul className="specs-list">
          <li><strong>Tipo:</strong> LED de alta intensidad con filtros</li>
          <li><strong>Temperatura de color:</strong> 3000K para zonas de exhibición, 4000K para áreas comunes</li>
          <li><strong>Ángulo de apertura:</strong> 25° para iluminación puntual, 40° para iluminación de área</li>
          <li><strong>Potencia:</strong> 30W por unidad</li>
          <li><strong>Control:</strong> Sistema DMX para control individual de cada foco</li>
          <li><strong>Montaje:</strong> Rieles electrificados en techo</li>
        </ul>
  
        <h3>Iluminación Ambiental (A1-A7)</h3>
        <ul className="specs-list">
          <li><strong>Tipo:</strong> Paneles LED difusos</li>
          <li><strong>Temperatura de color:</strong> Variable entre 2700K-5000K</li>
          <li><strong>Potencia:</strong> 45W por panel</li>
          <li><strong>Control:</strong> Sistema DMX con posibilidad de regulación y cambio de color</li>
          <li><strong>Montaje:</strong> Falso techo</li>
        </ul>
  
        <h3>Efectos Especiales (E1-E5)</h3>
        <ul className="specs-list">
          <li><strong>Tipo:</strong> Proyectores LED con gobos personalizados y proyectores RGB</li>
          <li><strong>Potencia:</strong> 50W por unidad</li>
          <li><strong>Control:</strong> Sistema DMX programado para secuencias específicas</li>
          <li><strong>Interactividad:</strong> Sensores de movimiento para activación en E3 y E4</li>
        </ul>
  
        <h3>Tiras LED (L1-L5)</h3>
        <ul className="specs-list">
          <li><strong>Tipo:</strong> Tiras LED RGB</li>
          <li><strong>Temperatura de color:</strong> Variable RGB con programación específica</li>
          <li><strong>Densidad:</strong> 60 LEDs por metro</li>
          <li><strong>Control:</strong> Sistema DMX con secuencias programadas</li>
          <li><strong>Montaje:</strong> Perfiles de aluminio con difusor</li>
        </ul>
      </div>
    )
  },
  
  // Especificaciones técnicas - Multimedia
  {
    title: "ESPECIFICACIONES TÉCNICAS - MULTIMEDIA",
    content: (
      <div>
        <h3>Pantallas Interactivas</h3>
        <ul className="specs-list">
          <li><strong>Tipo:</strong> Pantallas táctiles capacitivas</li>
          <li><strong>Resolución:</strong> 4K UHD (3840 x 2160 px)</li>
          <li><strong>Software:</strong> Sistema propietario con interfaz personalizada</li>
          <li><strong>Conectividad:</strong> Ethernet y WiFi</li>
          <li><strong>Actualizaciones:</strong> Remotas vía panel de administración</li>
        </ul>
  
        <h3>Sistemas de Audio</h3>
        <ul className="specs-list">
          <li><strong>Tipo:</strong> Altavoces direccionales y auriculares inalámbricos</li>
          <li><strong>Calidad:</strong> Audio HD (24 bit/48 kHz mínimo)</li>
          <li><strong>Control:</strong> Sistema centralizado con zonas independientes</li>
          <li><strong>Aislamiento:</strong> Paneles acústicos entre zonas para evitar interferencias</li>
        </ul>
  
        <h3>Estaciones de Juego</h3>
        <ul className="specs-list">
          <li><strong>Hardware:</strong> Consolas actualizadas con juegos instalados</li>
          <li><strong>Pantallas:</strong> Monitores gaming con bajo tiempo de respuesta (&lt;5ms)</li>
          <li><strong>Controles:</strong> Originales para cada plataforma con sistema de seguridad</li>
          <li><strong>Mantenimiento:</strong> Acceso diario para revisión y reset</li>
        </ul>
      </div>
    )
  },
  
  // Especificaciones gráficas y señalización
  {
    title: "ESPECIFICACIONES GRÁFICAS Y SEÑALIZACIÓN",
    content: (
      <div>
        <h3>Materiales Gráficos</h3>
        <ul className="specs-list">
          <li><strong>Paneles informativos:</strong> Impresión en vinilo sobre PVC 5mm con laminado mate</li>
          <li><strong>Señalización:</strong> Acrílico cortado a láser con vinil aplicado</li>
          <li><strong>Viniles de piso:</strong> Material antideslizante certificado</li>
          <li><strong>Acabados:</strong> Protección UV y anti-grafiti para todos los materiales</li>
        </ul>
  
        <h3>Tipografía y Paleta de Color</h3>
        <ul className="specs-list">
          <li><strong>Tipografía principal:</strong> Titulares en Futura Bold, cuerpo de texto en Roboto</li>
          <li><strong>Tamaño mínimo:</strong> 18 puntos para garantizar legibilidad</li>
          <li><strong>Paleta primaria:</strong> 
            <span style={{color: '#1E2A3D'}}> #1E2A3D</span> (azul oscuro), 
            <span style={{color: '#4A99E2'}}> #4A99E2</span> (azul), 
            <span style={{color: '#F5A623'}}> #F5A623</span> (ámbar)
          </li>
          <li><strong>Paleta secundaria:</strong> 
            <span style={{color: '#50E3C2'}}> #50E3C2</span> (turquesa), 
            <span style={{color: '#D0021B'}}> #D0021B</span> (rojo), 
            <span style={{color: '#9013FE'}}> #9013FE</span> (púrpura)
          </li>
        </ul>
  
        <h3>Requisitos de Accesibilidad</h3>
        <ul className="specs-list">
          <li><strong>Texto:</strong> Alto contraste y tamaño accesible</li>
          <li><strong>Braille:</strong> Información básica disponible en braille</li>
          <li><strong>Altura:</strong> Colocación de textos entre 120-160 cm del suelo</li>
        </ul>
      </div>
    )
  },
  
  // Seguridad y conservación
  {
    title: "SEGURIDAD Y CONSERVACIÓN",
    content: (
      <div>
        <h3>Vitrinas</h3>
        <ul className="specs-list">
          <li><strong>Material:</strong> Cristal templado antirreflejante de 10mm</li>
          <li><strong>Hermeticidad:</strong> Sistemas de cierre con juntas de silicona</li>
          <li><strong>Control ambiental:</strong> Sensores de humedad y temperatura</li>
          <li><strong>Seguridad:</strong> Alarmas y sensores de apertura no autorizada</li>
        </ul>
  
        <h3>Objetos Originales</h3>
        <ul className="specs-list">
          <li><strong>Iluminación:</strong> Máximo 50 lux para objetos sensibles</li>
          <li><strong>Exposición UV:</strong> Filtros UV en todas las fuentes de luz</li>
          <li><strong>Rotación:</strong> Plan de rotación para elementos sensibles</li>
          <li><strong>Manipulación:</strong> Uso de guantes y procedimientos específicos</li>
        </ul>
  
        <h3>Sistemas de Seguridad</h3>
        <ul className="specs-list">
          <li><strong>CCTV:</strong> Cámaras de seguridad en todas las salas</li>
          <li><strong>Alarmas:</strong> Sistemas perimetrales y puntuales</li>
          <li><strong>Personal:</strong> Guardias de seguridad y personal de sala capacitado</li>
          <li><strong>Protocolos:</strong> Procedimientos de emergencia y evacuación</li>
        </ul>
      </div>
    )
  },
  
  // Presupuesto estimado
  {
    title: "PRESUPUESTO ESTIMADO",
    content: (
      <div className="table-container">
        <table className="budget-table">
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Monto Estimado</th>
              <th>Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Diseño y planificación</td>
              <td>$35,000</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Mobiliario y vitrinas</td>
              <td>$70,000</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Equipamiento multimedia</td>
              <td>$105,000</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>Iluminación</td>
              <td>$52,500</td>
              <td>15%</td>
            </tr>
            <tr>
              <td>Gráfica y producción</td>
              <td>$35,000</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Montaje e instalación</td>
              <td>$35,000</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Contingencia</td>
              <td>$17,500</td>
              <td>5%</td>
            </tr>
            <tr className="total-row">
              <td>TOTAL</td>
              <td>$350,000</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  
  // Cronograma
  {
    title: "CRONOGRAMA",
    content: (
      <div className="table-container">
        <table className="timeline-table">
          <thead>
            <tr>
              <th>Fase</th>
              <th>Actividades Principales</th>
              <th>Duración</th>
              <th>Fechas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Diseño y Planificación</td>
              <td>Brief, guión, cronograma, presupuesto</td>
              <td>8 semanas</td>
              <td>Ene-Feb 2025</td>
            </tr>
            <tr>
              <td>2. Desarrollo de Contenido</td>
              <td>Investigación, textos, documento maestro</td>
              <td>8 semanas</td>
              <td>Feb-Mar 2025</td>
            </tr>
            <tr>
              <td>3. Diseño Museográfico</td>
              <td>Diseño ejecutivo, gráficos, planos, iluminación</td>
              <td>8 semanas</td>
              <td>Abr-May 2025</td>
            </tr>
            <tr>
              <td>4. Producción y Montaje</td>
              <td>Producción, instalación, pruebas</td>
              <td>6 semanas</td>
              <td>May-Jun 2025</td>
            </tr>
            <tr>
              <td>5. Inauguración</td>
              <td>Ajustes finales, inauguración</td>
              <td>2 semanas</td>
              <td>Jun 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  
  // Responsables por área
  {
    title: "RESPONSABLES POR ÁREA",
    content: (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Área</th>
              <th>Responsable Principal</th>
              <th>Equipo de Apoyo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Curaduría</td>
              <td>Equipo Curatorial</td>
              <td>Investigadores especializados</td>
            </tr>
            <tr>
              <td>Diseño Museográfico</td>
              <td>Equipo de Diseño</td>
              <td>Arquitectos, diseñadores de iluminación</td>
            </tr>
            <tr>
              <td>Contenido</td>
              <td>Redactores</td>
              <td>Especialistas en videojuegos, historiadores</td>
            </tr>
            <tr>
              <td>Multimedia</td>
              <td>Equipo Multimedia</td>
              <td>Programadores, técnicos audiovisuales</td>
            </tr>
            <tr>
              <td>Producción</td>
              <td>Gerente de Producción</td>
              <td>Constructores, instaladores</td>
            </tr>
            <tr>
              <td>Administración</td>
              <td>Gerente de Proyecto</td>
              <td>Asistentes administrativos</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '30px', textAlign: 'center', fontStyle: 'italic' }}>
          Este documento está sujeto a actualizaciones según avance el proyecto.
        </p>
      </div>
    )
  }
]