import React, {Fragment} from 'react';

const OperadorTernario = (props) => {

    const edad = props.xEdad;

    return (
        <Fragment>
            <h4> Componente 7. Con variable recibida ejecuta operador ternario</h4>
            
            <h3>Valor recibido: ({edad}) </h3>
            
            <h3> Resultado de operador ternario: 
                {edad >= 18? 'Mayor de edad': 'Menor de edad'}
            </h3>

        </Fragment>
    );
}

export default OperadorTernario;
