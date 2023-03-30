import './App.css';

function App() {
  return (
    <div className="App">
      <form onSubmit={alerta}>
        <p>Salude: &nbsp; 
          <input type="text" name="valor1" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

function alerta(e) {
  e.preventDefault();
  
  alert(e.target.valor1.value);
}

export default App;
