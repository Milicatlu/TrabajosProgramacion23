import './App.css';
import { Page, Button } from "react-onsenui"

function OnsenButtonEx() {
    return (
        <Page>
            <Button> Click Me!!</Button>
        </Page>
    )
}
function App() {
  return (
    <div className="App">
      <form onSubmit={contarvocales}>
        <p>Contador de vocales: &nbsp; 
          <input type="text" name="valor1" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

function contarvocales(e) {
  e.preventDefault();
  let cont = 0;
  let min = e.target.valor1.value.toLowerCase();
  
  for (let i = min.length - 1; i >= 0; i--) {
    if (min.charAt(i) === 'a' || min.charAt(i) === 'e' || min.charAt(i) === 'i' || min.charAt(i) === 'o' || min.charAt(i) === 'u') {
        cont++;
    }
  }
  alert("La palabra: " + e.target.valor1.value + " tiene " + cont + " vocales");
}


export default App;