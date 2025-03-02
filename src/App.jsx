import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Pre2 from './Componentes/Actividad2/presentacion';
import Pre3 from './Componentes/Actividad3/presentacion3';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/actividad2" element={<Pre2 />} />
                <Route path="/actividad3" element={<Pre3 />} />
            </Routes>
        </Router>
    );
};

export default App;
