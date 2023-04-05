import React, { useState } from 'react';
import './Lista.css';

function Lista() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = (event) => {
    setNuevaTarea(event.target.value);
  };

  const agregarNuevaTarea = () => {
    if (nuevaTarea) {
      setTareas([...tareas, { text: nuevaTarea, completed: false }]);
      setNuevaTarea('');
    }
  };

  const tareacompletada = (index) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[index].completed = !tareasActualizadas[index].completed;
    setTareas(tareasActualizadas);
  };

  return (
    <div className="container">
      <h1>Lista de tareas</h1>
      <ul>
        {tareas.map((tarea, index) => (
          <li
            key={index}
            className={tarea.completed ? 'completada' : ''}
            onClick={() => tareacompletada(index)}
          >
            {tarea.text}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={nuevaTarea} onChange={agregarTarea} />
        <button onClick={agregarNuevaTarea}>Agregar tarea</button>
      </div>
    </div>
  );
}

export default Lista;
