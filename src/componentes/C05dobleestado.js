import React, {useState, Fragment} from 'react';

const EjemploDeDobleEstado = () => {

    const [valor, setValor]= useState(0);
    const [numero, setNumero]= useState(0);

    const IncrementoDos = () => {
        setNumero(numero + 1);
        console.log("Mensaje de contador");     
    }

    return(
        <Fragment>
            <h4>Componente 5. Ejemplo con dos estados diferentes</h4>

            <button onClick={()=>setValor(valor+1)}>contador 1. Con funcion abreviada</button>
            <span>Inncremento de contador 1: {valor} </span>
            <hr/>

            <button onClick={IncrementoDos}>contador 2. Con llamada a funcion</button>
            <span>Inncremento de contador 2: {numero} </span>

        </Fragment>
    );
}

export default EjemploDeDobleEstado;