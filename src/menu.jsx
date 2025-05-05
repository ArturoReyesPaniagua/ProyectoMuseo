import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Menu = () => {
    const navigate = useNavigate(); 

    return (
        <div className="container">
            <div className="presentation-box">
                <h1>Bienvenido al proyecto de GOTY (game of the year) como museo</h1>
                <h4>Esta página web es presentada por el equipo Guardian de la osa:</h4>
                <p className='Nombres'>Arturo Reyes y Arturo Cruz</p>
                
                <div className="button-group">
                    <button onClick={() => navigate('/actividad2')}>Actividad 2</button>
                    <button onClick={() => navigate('/actividad3')}>Actividad 3</button>
                    <button onClick={() => navigate('/actividad4')}>Actividad 4</button>
                    <button onClick={() => navigate('/actividad5')}>Actividad 5</button>
                    <button onClick={() => navigate('/actividad6')}>Actividad 6</button>
                    <button onClick={() => navigate('/actividad8')}>Actividad 8</button>
                    <button onClick={() => navigate('/actividad9')}>Actividad 9</button>
                    <button onClick={() => navigate('/actividad10')}>Actividad 10</button>
                    <button onClick={() => navigate('/actividad11')}>Actividad 11</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;