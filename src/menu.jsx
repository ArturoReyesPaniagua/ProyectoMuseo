import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Menu = () => {
    const navigate = useNavigate(); 

    return (
        <div className="container">
            <div className="presentation-box">
                <h1>Bienvenido al proyecto de GOTY (game of the year) como museo</h1>
                <h4>Esta pagina web es presentada por el equipo Guardian de la osa:</h4>
                <p className='Nombres'>Arturo Reyes y Arturo Cruz</p>
                
                <div className="button-group">
                    <button onClick={() => navigate('/actividad2')}>Actividad 2</button>
                    <button onClick={() => navigate('/actividad3')}>Actividad 3</button>

                    {
                    
                    // <button onClick={() => handleClick(3)}>Tarea 4</button>
                    }
                </div>
            </div>
        </div>
    );
};


export default Menu;
