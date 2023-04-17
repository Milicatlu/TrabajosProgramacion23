import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useState, useEffect } from 'react';
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import React from 'react';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import './App.css';
import Texto from './Texto';

function App() {
  const [texto, setTexto] = useState("");
  const [contador, setContador] = useState(0);
  const [contadorPalabra, setContadorPalabra] = useState(0);
 let r = 0;
  function cambiar(e) {
    const valor = e.target.value;
   
    if (valor.length <= 100) {
      for (let i = 0; i < valor.length; i++) {
        if (valor[i] === ' ') {
          r++;
        }
      }
      setTexto(valor);
      setContador(valor.length);
      setContadorPalabra(r);
    } else {
      alert("Límite de caracteres alcanzado");
    }
  }

  return (
    <div>
      <Texto texto={texto} cambiar={cambiar} contador={contador} contadorPalabra={contadorPalabra} />
    </div>
  );
}

export default App;