import { useParams, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { tasksData } from '../TaskData';

function TaskDetailPage({ tasksData }) {
  const { id } = useParams();
  const task = tasksData.find((task) => task.id === Number(id));
  const [completed, setCompleted] = useState(task?.completed || false);

  const handleCompleteToggle = () => {
    setCompleted((prevCompleted) => !prevCompleted);
  };

  if (!task) {
    return <div>Tarea no encontrada</div>;
  }

  return (
    <div className="container">
      <h1 className="mt-5">Detalles de la Tarea</h1>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <p className="card-text">{task.description}</p>
          <p className="card-text">Fecha de Creación: {task.createdAt}</p>
          <p className="card-text">
            Estado: {completed ? 'Completa' : 'Incompleta'}
          </p>
          <button onClick={handleCompleteToggle} className="btn btn-primary">
            {completed ? 'Marcar como Incompleta' : 'Marcar como Completa'}
          </button>
        </div>
      </div>
      <Link to="/" className="btn btn-secondary mt-3">
        Volver a la Lista
      </Link>
    </div>
  );
}

export default TaskDetailPage;
