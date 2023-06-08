import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';


function HomePage({ tasksData }) {
  return (
    <div className="container">
      <h1 className="mt-5">Lista de Tareas</h1>
      <TaskList tasksData={tasksData} />
      <Link to="/create-task" className="btn btn-primary mt-3">
        Crear Nueva Tarea
      </Link>
    </div>
  );
}

export default HomePage;
