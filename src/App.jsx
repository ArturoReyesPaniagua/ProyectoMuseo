import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Pre2 from './Componentes/Actividad2/presentacion';
import Pre3 from './Componentes/Actividad3/presentacion3';
import Pre4 from './Componentes/Actividad4/presentacion4';
import Pre5 from './Componentes/actividad5/presentacion5';
import Pre6 from './Componentes/Actividad6/presentacion6';
import Pre8 from './Componentes/Actividad8/presentacion8';
import Pre9 from './Componentes/Actividad9/presentacion9';
import Pre10 from './Componentes/actividad10/presentacion10';
import Pre11 from './Componentes/Actividad11/presentacion11';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/actividad2" element={<Pre2 />} />
                <Route path="/actividad3" element={<Pre3 />} />
                <Route path="/actividad4" element={<Pre4 />} />
                <Route path="/actividad5" element={<Pre5 />} />
                <Route path="/actividad6" element={<Pre6 />} />
                <Route path="/actividad8" element={<Pre8 />} />
                <Route path="/actividad9" element={<Pre9 />} />
                <Route path="/actividad10" element={<Pre10 />} />
                <Route path="/actividad11" element={<Pre11 />} />
            </Routes>
        </Router>
    );
};

export default App;