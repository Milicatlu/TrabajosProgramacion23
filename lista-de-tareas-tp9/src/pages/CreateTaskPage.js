import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateTaskPage({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = event => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
      completed
    };
    addTask(newTask);
    console.log('Nueva Tarea:', newTask);
    navigate('/');
  };
  return (
    <div className="container">
      <h1 className="mt-5">Crear Nueva Tarea</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="completed"
            checked={completed}
            onChange={event => setCompleted(event.target.checked)}
          />
          <label htmlFor="completed" className="form-check-label">
            Completada
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Tarea
        </button>
      </form>
    </div>
  );
}

export default CreateTaskPage;
