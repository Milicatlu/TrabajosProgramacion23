import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import './Texto.css';
function Texto(props) {
  return (
    <div className="conteiner">
      <h1>Ingresar texto</h1>
      <InputTextarea value={props.texto} onChange={props.cambiar} rows={5} cols={30} />
      <p className="contador">{props.contador}/100 caracteres</p>
      <p className="contadorPala">{props.contadorPalabra} Palabras </p>
    </div>
  );
}

export default Texto;