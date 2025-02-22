import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Menu = () => {
    const navigate = useNavigate(); // Aquí importamos useNavigate

    const handleClick = (option) => {
        alert(`Opción ${option} seleccionada`);
    };

    return (
        <div className="container">
            <div className="presentation-box">
                <h1>Bienvenido al proyecto de GOTY (game of the year) como museo</h1>
                <h4>Esta pagina web es presentada por el equipo Guardian de la osa:</h4>
                <p className='Nombres'>Arturo Reyes y Arturo Cruz</p>
                
                <div className="button-group">
                    <button onClick={() => navigate('/presentacion')}>Actividad 2</button>
                    {
                    //<button onClick={() => handleClick(2)}>Tarea 3</button>
                    // <button onClick={() => handleClick(3)}>Tarea 4</button>
                    }
                </div>
            </div>
        </div>
    );
};


export default Menu;
