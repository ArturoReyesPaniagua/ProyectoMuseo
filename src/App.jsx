import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './menu';
import Presentacion from './presentacion';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/presentacion" element={<Presentacion />} />
            </Routes>
        </Router>
    );
};

export default App;