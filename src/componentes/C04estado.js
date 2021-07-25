import React, {useState} from 'react';

const EjemploDeEstado = () => {

    const [numero, setNumero]= useState(0);

    const aumentar = () => {
        console.log("Hacer clic");
        setNumero(numero + 1);
    }

    return(
        <div style={{backgroundColor:'yellowgreen'}}>
            <h4>Componente 4. Ejemplo con definicion de estados </h4>
            
            <h3>Muestra incremento de valor... {numero} </h3>

            <button onClick={aumentar}>Aumentar en 1</button>
            <hr/>
        </div>
    );
}

export default EjemploDeEstado;
