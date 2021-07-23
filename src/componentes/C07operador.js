import React, {Fragment} from 'react';

const OperadorTernario = (props) => {
    const edad = props.xEdad;
    return (
        <Fragment>
            <h4> Componente 7. Con variable recibida ejecuta operador terna</h4>
            <h3>Valor recibido:({edad}) </h3>
            <he> Resultado de operador ternario: 
                {edad >= 18? 'Mayor de edad': 'Menor de edad'}
            </he>

        </Fragment>
    );
}

export default OperadorTernario;
