
import React from 'react'
import "./C03compCss.css"
import style from './C03compCssObj.js'

const C03componenteConCss = () => {
    return(
        <div className="marcoComponente">
            <h4>Componente 3. con formas de definir estilos</h4>
            <button style={{backgroundColor:'green', color:'blue',padding:'3px'}}>
                boton con estilos en linea de atributos ( Definido como objeto)
            </button>
            <hr/>
            <button>
                Boton 2 con estilos en archivo Css (normal)
            </button>
            <br/>
            <button style={style.estilo1}>
                Boton 3 con estilos en archivos js (Definido como objeto)
            </button>
        </div>

    )
}
export default C03componenteConCss