    import React, {useState} from 'react';
    function FormularioUsuario (){
        const [nombre, setNombre] = useState (" ");
        const manejarEnvio = (evento) => {
            evento.preventDefault () ;
            alert(`Nombre de usuario: ${nombre}`);

        };
        return (
            <form onSubmit={manejarEnvio}>
                <div>
                    <label>
                        Nombre:
                    <input
                    type="text" 
                    value={nombre}
                    onChange= { (e) => setNombre(e.target.value)}
                    />
                    </label>
                </div>
                <br/>
                <button type= "submit"> Presiona para ver tu nombre  </button>
            </form>
        );
    }
    export default FormularioUsuario; 