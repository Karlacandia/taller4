import React from 'react';
const ButtonClick = () => {
    const cambiarButton= () => {
        alert ("Boton clickeado");
    };
    return (
        <button onClick ={cambiarButton}>
            Da click aqui 
            </button>
    );
}; 

export default ButtonClick;