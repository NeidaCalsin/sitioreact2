import C01componentes from "./componentes/C01componentes";
import C02contador from "./componentes/C02contador";
import C03compCss from "./componentes/C03compCss";
import C04estado from "./componentes/C04estado";
import C05dobleestado from "./componentes/C05dobleestado";
import C06variable from "./componentes/C06variable";
import C07operador from "./componentes/C07operador";
import C08matriz from "./componentes/C08matriz";


function App() {
  return (
    <div className= "container">
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
      <C06variable xVariable="Hola mundo...desde React"/>
      <hr/>
      <C07operador sEdad='20'></C07operador>
      <hr/>
      <C08matriz ></C08matriz>


      <header className="row bg-secondary">
		(Header - Cabecera)
	</header>

	<nav className="row bg-warning">
		(nav-menu)
	</nav>

	<section className="row bg-primary"> 
		<article className="col-md-6 bg-warning"> 
			Articulo 1
		</article>
		
		<article className="col-md-4 bg-secondary">
			Articulo 2
		</article>

		<aside className="col-md-2 bg-primary">
			aside
		</aside>
	</section>

	<footer className="row bg-dark text-light">
		footer
	</footer>

    </div>
  );
}

export default App;

