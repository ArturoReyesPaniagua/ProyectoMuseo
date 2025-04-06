import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Pre2 from './Componentes/Actividad2/presentacion';
import Pre3 from './Componentes/Actividad3/presentacion3';
import Pre4 from './Componentes/Actividad4/presentacion4';
import Pre6 from './Componentes/Actividad6/presentacion6';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/actividad2" element={<Pre2 />} />
                <Route path="/actividad3" element={<Pre3 />} />
                <Route path="/actividad4" element={<Pre4 />} />
                <Route path="/actividad6" element={<Pre6 />} />
            </Routes>
        </Router>
    );
};

export default App;