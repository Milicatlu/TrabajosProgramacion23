import React, { useState } from "react";
// or less ideally

import './SumarnyRestar.css';

function SumarnyRestar(props) {
  const [numero, setNumero] = useState(props.initialValue);

  function Restar() {
    setNumero(numero - 1);
  }
  
  function Sumar() {
    setNumero(numero + 1);
  }

  return (
    <div className="container">
      <p>Número aleatorio: {numero}</p>
      <div className="btn-container">

      <button className="btn" onClick={Restar}  variant="primary">Restar numero</button>{' '}

      <button className="btn" onClick={Sumar} variant="success">Sumar numero</button>{' '}

      </div>
    </div>
  );
}

export default SumarnyRestar;