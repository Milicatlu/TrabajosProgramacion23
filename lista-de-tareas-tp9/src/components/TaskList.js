import React from 'react';
import { Link } from 'react-router-dom';

function TaskList({ tasksData }) {
  return (
    <div>
      {tasksData.map(task => (
        <div key={task.id} className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <Link to={`/tasks/${task.id}`} className="btn btn-primary">
              Ver Detalles
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
