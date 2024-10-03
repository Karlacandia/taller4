import React from 'react';
function Formulario ({onChange}) {
    return (
        <div>
            <input
            type= "number"
            onChange={(e) => onChange (e.target.value)}
            placeholder="Escribe un numero"
            />
        </div>
    );
}
export default Formulario; 