import C01componentes from "./componentes/C01componentes";
import C02contador from "./componentes/C02contador";
import C03compCss from "./componentes/C03compCss";
import C04estado from "./componentes/C04estado";
import C05dobleestado from "./componentes/C05dobleestado";
import C06variable from "./componentes/C06variable";

function App() {
  return (
    <div >
      <C01componentes></C01componentes>
      <hr/>
      <C02contador></C02contador>
      <hr/>
      <C03compCss></C03compCss>
      <hr/>
      <C04estado></C04estado>
      <hr/>
      <C05dobleestado></C05dobleestado>
      <hr/>
      <C06variable xVariable="Hola mundo..."/>
      <hr/>

    </div>
  );
}

export default App;

