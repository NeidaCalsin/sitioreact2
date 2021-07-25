import React from 'react';
 
 const ComponenteConVariable = (props) => {
     return (
         <div style={{backgroundColor:'yellowgreen'}}>
             <h4>Componente 6. Muestra de recepcion y lectura de variable, enviada
                 cuando es llamado el componente
             </h4>
             <span>Lectura de variable: {props.xVariable}</span>
         </div>
     );
 }

 export default ComponenteConVariable;
 