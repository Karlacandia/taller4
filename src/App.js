// //Ejercicio Nº1
// import React from 'react';
// import ButtonClick from './components/Buttonclikeado';

// function App () {
//   return (
//     <div>
//     <ButtonClick/>
//     </div>
//   );
// }

// export default App; 

// Ejercicio N°2
//  import React from 'react';
//  import FormularioUsuario from './components/FormularioUsuario';
//  function App () {
//   return (
//     <div>
//       <FormularioUsuario/>
//     </div>
//   );
//  }
//  export default App; 

//Ejercicio N°3
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
function App () {
  const [numero, setNumero] = useState (' ');
  return (
    <div>
      <Formulario onChange={setNumero}/>
      <Resultado numero={numero}/>
    </div>
  );
}
 export default App; 